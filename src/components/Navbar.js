import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar(props) {

    const[openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className="navbar">
        <div className = "leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="Company Logo that reads Kirkland Swimming"/>
            <div className = "hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/hours">Hours</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact us</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/hours">Hours</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact us</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  );
}

export default Navbar