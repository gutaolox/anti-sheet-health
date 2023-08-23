import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") ?? "";

  try {
    const body: { weight: number; dateTimestamp: Date } = await req.json();

    const healthReference = await prisma.healthStatus.findFirst({
      where: {
        userId: id,
        createdAt: { lte: body.dateTimestamp, gte: body.dateTimestamp },
      },
    });

    const summary = await prisma.healthStatus.upsert({
      where: {
        id: healthReference?.id ?? "",
      },
      create: {
        weight: body.weight,
        userId: id,
      },
      update: { weight: body.weight },
    });

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
