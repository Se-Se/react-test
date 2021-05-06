import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

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
      <div>home</div>
      <button onClick={GotoTest}>go to test</button>
    </>
  );
}

export default Home;
