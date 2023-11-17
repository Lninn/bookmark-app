import React from "react";
import Viewer from "./Viewer";

export default async function Dashboard() {
  return (
    <div>
      <div>
        <a href="/">Index</a>
      </div>
      <Viewer />     
    </div>
  );
}
