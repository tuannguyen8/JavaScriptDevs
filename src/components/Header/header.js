import "./header.css"
import { Routes, Route, Link } from "react-router-dom";


const header = () => {
	return (
		<nav className="header-nav navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-a" to="/">Landing</Link>
          <Link className="nav-a" to="/dashboard">Dashboard</Link>
          <Link className="nav-a" to="/profile">User Profile</Link>
        </nav>
	);
};

export default header;
