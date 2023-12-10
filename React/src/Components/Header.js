import { LOGO_URL } from "../utils/links";
import { useState } from "react";

const Header = () => {

    const [btn, setbtn] = useState("login");
    return (
        <div className="header">
            <div className="image">
                <img
                    src={LOGO_URL}
                    alt=""
                />
            </div>

            <div className="items">
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Cart </li>

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