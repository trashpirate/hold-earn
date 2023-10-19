import React from "react";
import Head from "next/head";

export default function AnimatedCursor() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/mouse-animation/style.css" />
        <script src="/mouse-animation/script.js" />
      </Head>
      <iframe src="/mouse-animation/index.html" width="100%" height="300" title="Mouse Animation" />
    </div>
  );
}
