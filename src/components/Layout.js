import { Outlet, Link } from "react-router-dom";
import Toolbar from "./Toolbar";
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
            <p>Yay! No notices to show</p>
        </header>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;