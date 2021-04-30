import React from "react";
// import './mock/mockData.js'
// import "./setupProxy";
import Routes from "@/router/routes";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
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
