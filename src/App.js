import React from "react";
import "./styles.css";

import ReduxDemo1 from "./ReduxDemo1";
import ReduxDemo2 from "./ReduxDemo2";

export default function App() {
  return (
    <>
      <h1>Demo1 (only map state to props)</h1>
      <ReduxDemo1 />
      <h1>Demo2 (with map dispatch to props)</h1>
      <ReduxDemo2 />
    </>
  );
}
