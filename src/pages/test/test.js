import React, { useEffect } from "react";
import { getTest,getData } from "@/api/index.js";

function Test(props) {
  useEffect(() => {
    console.log(props)
    // getTest().then((res) => {
    //   console.log(res);
    // });
    getData().then(res=>{
      console.log('/api/sars/toheros1',res)
    })
  });
  return (
    <>
      <div className="test_class">test</div>
    </>
  );
}

export default Test;
