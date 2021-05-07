import React, { useEffect } from "react";
// import './mock/mockData.js'
// import "./setupProxy";
import Routes from "@/router/routes";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import intl from "react-intl-universal";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import { getDefaultLanguage } from "@/utils/language";
import Cookies from "js-cookie";

const locales = {
  en: require("@/locales/en-US.json"),
  zh: require("@/locales/zh-CN.json"),
};

function App(props) {
  const history = createBrowserHistory(); // app.js在路由外面，里不能用useHistroy
  let pathName = window.location.pathname;
  let lang = Cookies.get("lang") || getDefaultLanguage();
  useEffect(() => {
    console.log(lang);
    intl
      .init({
        currentLocale: lang,
        locales,
      })
      .then(() => {
        const html = document.getElementsByTagName("html")[0];
        html.setAttribute("lang", lang);
      });
  }, [props, pathName]);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
