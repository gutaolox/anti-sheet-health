import { UserSummaryInterface } from "@/interfaces/userSummary";
import { customAxios } from "../customAxios";

export async function getUser() {
  return await customAxios(false).get<{
    summary: UserSummaryInterface;
  }>("/userSummary");
}
