import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import { Search } from "react-router-dom";

const Header = () => {

    const [btn, setbtn] = useState("login");
    return (
        <div className="header">
            <div className="image">
                <Link to="/">
                    <img
                        src={LOGO_URL}
                        alt=""
                    />
                </Link>
            </div>

            <div className="items">
                <ul>
                    
                    <li> <Link to="/About">About</Link>   </li>
                    <li> <Link to="/Contact">Contact</Link>   </li>


                </ul>
                <button onClick={() => {
                    btn === "login" ?
                        setbtn("Logout")
                        : setbtn("login")

                }}
                    className="login">
                    {btn}
                </button>
            </div>
        </div>
    );
};
export default Header;