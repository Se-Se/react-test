import React, { useEffect } from "react";
import { getTest,getData } from "@/api/index.js";

function Test() {
  useEffect(() => {
    getTest().then((res) => {
      console.log(res);
    });
    getData().then(res=>{
      console.log('/api/sars/toheros',res)
    })
  });
  return (
    <>
      <div>test</div>
    </>
  );
}

export default Test;
