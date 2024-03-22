import React, { useState, useEffect } from "react";
import "./Notices.css";

function Notices() {
  const [notices, setNotices] = useState([]);

  //Get the information about notices from database
  useEffect(() => {
    async function getNotices() {
      const response = await fetch("http://localhost:5000/get-notices");
      if (!response.ok) {
        console.log("fetchData() fetch error occured");
        return;
      }
      const records = await response.json();
      if (!records) {
        console.log("fetchData() records not located");
        return;
      }
      setNotices(records);
    }
    getNotices();
  });

  //Create line items for a list containing the information about the notices
  const listItems = notices.map((notice) => (
    <li key={notice._id} className="notice">
      <h2>
        {notice.date.split("T")[0]} | {notice.title}
      </h2>
      <p>{notice.body}</p>
    </li>
  ));

  //Note the selector "notices page", matching both .page from App.css and .notices from Notices.css
  return (
    <div className="notices page">
      <h1>Notices</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Notices;
