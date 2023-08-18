import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") ?? "";
  const summary = await prisma.user.findUnique({ where: { id } });

  return NextResponse.json({ summary });
}
