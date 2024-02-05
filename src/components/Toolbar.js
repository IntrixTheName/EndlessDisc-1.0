//Inspiration for this toolbar taken from ChatGPT exerpt, and modified for use here

import React from 'react';
import './Toolbar.css';
import logo from '../assets/logo-notext.svg';

function ToolbarItem(props) {
  return <li className="button">{props.text}</li>
}

function Toolbar() {
  return (
    <div className="toolbar">
      <img src={logo} alt="Endless Disc" width="50px" height="50px" />
      <ul className="tab">
        <ToolbarItem text="Home" />
        <ToolbarItem text="Notices" />
        <ToolbarItem text="Library" />
        <ToolbarItem text="Import" />
        <ToolbarItem text="Export" />
      </ul>
    </div>
  );
};

export default Toolbar;
