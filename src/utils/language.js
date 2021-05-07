import Cookies from "js-cookie";

export function getDefaultLanguage() {
  console.log(navigator);
  const lans = ["zh", "ko", "ja", "en"];
  const langString = navigator.language || navigator.userLanguage;
  const lang = langString.substr(0, 2);
  return lans.indexOf(lang) >= 0 ? lang : "zh";
}

export async function changeLanguage(data) {
  console.log(321321, data);
  const lang = data || getDefaultLanguage;
  Cookies.set("lang", lang);
}
