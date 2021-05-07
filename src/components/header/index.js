import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLanguage } from "@/utils/language";

export default function Headers() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.langReducer);

  const changeLan =  (ev) => {
    const setLogAct = (lan) => ({ type: "SET_LANGUAGE", language: lan });
    dispatch(setLogAct(ev));
    changeLanguage(ev);
    history.go(0);
  };
  return (
    <>
      <button onClick={() => changeLan("zh")}>zh-cn</button>
      <button onClick={() => changeLan("en")}>en-us</button>
      <button onClick={() => changeLan("ko")}>ko</button>
      <button onClick={() => changeLan("ja")}>ja</button>
    </>
  );
}
