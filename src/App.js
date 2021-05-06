import React, { useEffect } from "react";
// import './mock/mockData.js'
// import "./setupProxy";
import Routes from "@/router/routes";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import intl from "react-intl-universal";
import { createBrowserHistory } from "history";

const locales = {
  "en-US": require("@/locales/en-US.json"),
  "zh-CN": require("@/locales/zh-CN.json"),
};

function App(props) {
  const history = createBrowserHistory(); // app.js在路由外面，里不能用useHistroy

  const html = document.getElementsByTagName("html");
  let pathName = window.location.pathname;
  let langParam = html[0].getAttribute("lang");
  let lang = props.language ? props.language : langParam ? langParam : "zh-CN";
  useEffect(() => {
    intl
      .init({
        currentLocale: lang,
        locales,
      })
      .then(() => {
        html[0].setAttribute("lang", lang);
      });
  }, [lang, props, pathName]);

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
