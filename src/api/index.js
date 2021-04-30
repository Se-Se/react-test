import { get } from "./api.config";

export async function getTest(params) {
  return await get("/ad/json/536", params);
}

export async function getData(params) {
  return await get("/api/sars/toheros", params);
}

