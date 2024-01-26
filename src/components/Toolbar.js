//Inspiration for this toolbar taken from ChatGPT exerpt, and modified for use here

import React from 'react';
import banner_logo from '../assets/logo-banner.svg';

function ToolbarItem(dest) {
  return <button onclick={dest.action}>{dest.text}</button>
}

function Toolbar() {
  return (
    <div className="toolbar">
      <img src={banner_logo} alt="Endless Disc" width="192px" height="108px" />
      <ToolbarItem text="Home" />
      <ToolbarItem text="Library" />
      <ToolbarItem text="Import" />
      <ToolbarItem text="Export" />
    </div>
  );
};

export default Toolbar;