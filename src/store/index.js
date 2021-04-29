import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// redux-persist管理redux, 解决刷新react-redux数据丢失
import storage from "redux-persist/lib/storage";

import { reducers } from "./reducers";

const persistConfig = {
  key: "root", // 必须有的
  storage, // 缓存机制
  blacklist:['testReducer']
  // blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };