import React from "react";
import Demo from "./Demo";
import File from "./File";
import Viewer from "./Viewer";

export default async function Dashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <Viewer />     
      <Demo />
      <File />
    </div>
  );
}
