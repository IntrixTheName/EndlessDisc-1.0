import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
//import Toolbar from "./Toolbar";
import './Toolbar.css';
import logo from '../assets/logo-notext.svg';

function ToolbarItem(props) {
    return (
    <li className="button">
        <Link className="link" to={props.dest}>{props.text}</Link>
    </li>
    )
  }

const Layout = () => {
  const [news, setNews] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/get-notices');
      if (!response.ok) {console.log("fetchData() fetch error occured"); return;}
      const records = await response.json();
      const now = new Date()
      const one_week_ago = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).getTime(); 
      if (!records || new Date(records[0].date).getTime() < one_week_ago) {setNews("Yay! No updates to show from the last week!"); return;}
      else {setNews(`${records.length > 1 ? `${records.length} updates`:`1 update`} within the last week. Latest: ${records[0].date.split('T')[0]} | ${records[0].title}`);}
    }
    fetchData();
  })

    return (
      <>
        <nav className="toolbar">
            <Link to="/"><img src={logo} alt="Endless Disc" width="50px" height="50px" /></Link>
            <ul className="tab">
                <ToolbarItem dest="/library" text="Library" />
                <ToolbarItem dest="/import" text="Import" />
                <ToolbarItem dest="/export" text="Export" />
                <ToolbarItem dest="/notices" text="Notices" />
            </ul>
        </nav>

        <header className="header">
            <p>{news}</p>
        </header>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;