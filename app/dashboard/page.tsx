import React from "react";
import Demo from "./Demo";
import db from "@/app/api/db"
import Bookmark from "@/models/Bookmark"

async function getData() {
  await db()

  const result = await Bookmark.find({})

  return result
}

export default async function Dashboard() {
  const data = await getData()

  return (
    <div>
      <div>Dashboard</div>
      <div>
        <div>Names</div>
        <div>
          {data.map(datum => {
            return (
              <div key={datum.name} className="border flex gap-2">
                <div>{datum.name}</div>
                <div>{datum.age}</div>
              </div>
            )
          })}
        </div>
      </div>
      <Demo />
    </div>
  );
}
