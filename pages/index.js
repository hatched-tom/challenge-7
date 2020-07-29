import React from "react";

import Head from "next/head";

import ClassyComponent from "../components/ClassyComponent";
import DOMyComponent from "../components/DOMyComponent";
import HooksyComponent from "../components/HooksyComponent";

export default function Home() {
  return (
    <div className="clock-wrapper">
      <Head>
        <title>Clocky McClockface</title>
      </Head>

      <main className="clock">
        <ClassyComponent />
        <span>-</span>
        <DOMyComponent />
        <span>-</span>
        <HooksyComponent />
      </main>
    </div>
  );
}
