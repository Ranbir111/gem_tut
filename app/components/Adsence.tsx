import Script from "next/script";
import React from "react";


const Adsence = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7942829668761041"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    ></Script>
  );
};

export default Adsence;
