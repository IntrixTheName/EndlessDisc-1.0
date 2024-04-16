//Inspiration for this toolbar taken from ChatGPT exerpt, and modified for use here
import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Toolbar.css";
import EndlessDisc_NoText from "../assets/EndlessDisc_NoText";
import GitHubLogo from "../assets/github-mark.png";

function ToolbarItem(props) {
  return (
    <li id={props.id} className="button">
      <Link className="link" to={props.dest}>
        {props.text}
      </Link>
    </li>
  );
}

function Toolbar() {
  return (
    <nav className="toolbar">
      <Link to="/">
        <EndlessDisc_NoText width="75px" height="75px" />
      </Link>
      <ul className="tab">
        <ToolbarItem dest="/library" text="Library" id="library" />
        <ToolbarItem dest="/radio" text="Radio" id="radio" />
        <ToolbarItem dest="/import" text="Import" id="import" />
        <ToolbarItem dest="/export" text="Export" id="export" />
        <ToolbarItem dest="/notices" text="Notices" id="notices" />
        <Link to="https://github.com/IntrixTheName/EndlessDisc">
          <img src={GitHubLogo} width="30px" height="30px" />
        </Link>
      </ul>
    </nav>
  );
}

export default Toolbar;

//<Link to="/"><img src={logo} alt="Endless Disc" width="75px" height="75px" /></Link>
