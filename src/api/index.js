import { get } from "./api.config";

export async function getTest(params) {
  return await get("/zh-cn/docs/", params);
}

export async function getData(params) {
  return await get("api/sars/toheros", params);
}
