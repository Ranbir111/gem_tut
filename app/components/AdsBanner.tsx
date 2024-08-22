"use client"
import React, { useEffect } from "react";

function AdsBanner() {
  useEffect(()=>{
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  },[])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7942829668761041"
      data-ad-slot="8266206789"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

export default AdsBanner;
