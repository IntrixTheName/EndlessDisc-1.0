import React, {useState, useEffect} from "react";

function Notices() {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/get-notices');
      if (!response.ok) {console.log("fetchData() fetch error occured"); return;}
      const records = await response.json();
      if (!records) {console.log("fetchData() records not located"); return;}
      setNotices(records);
    }
    fetchData();
  })

  const listItems = notices.map(notice => 
    <li>
      <div id={notice._id}>
        <h2>{notice.date.split('T')[0]} | {notice.title}</h2>
        <p>{notice.body}</p>
      </div>
    </li>
  );

  return (
    <div className="notices">
      <h1>Notices</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};
  
export default Notices;
  