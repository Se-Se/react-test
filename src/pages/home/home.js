import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "@/components/header";
import intl from 'react-intl-universal';

function Home() {
  const history = useHistory();
  const GotoTest = () => {
    const search = history.location.search;
    history.push({
      pathname: `/test`,
    });
  };
  return (
    <>
      <Header></Header>
      <div>{intl.get('TEST_NAME')}</div>
      <button onClick={GotoTest}>go to test</button>
    </>
  );
}

export default Home;
