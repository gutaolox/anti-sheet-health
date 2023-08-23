import { customAxios } from "../customAxios";

export async function setWeight(weight: number, date: Date) {
  return await customAxios(true).put(
    `/healthStatus/weight?id=${process.env.USER_ID}`,
    { weight, date }
  );
}
