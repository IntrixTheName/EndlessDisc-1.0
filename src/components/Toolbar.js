//Inspiration for this toolbar taken from ChatGPT exerpt, and modified for use here

import React from 'react';
import './Toolbar.css';
import banner_logo from '../assets/logo-notext.svg';

function ToolbarItem(props) {
  return <li className="button">{props.text}</li>
}

function Toolbar() {
  return (
    <div className="toolbar">
      <img src={banner_logo} alt="Endless Disc" width="192px" height="108px" />
      <ul className="tabs">
        <ToolbarItem text="Home" />
        <ToolbarItem text="Library" />
        <ToolbarItem text="Import" />
        <ToolbarItem text="Export" />
      </ul>
    </div>
  );
};

export default Toolbar;