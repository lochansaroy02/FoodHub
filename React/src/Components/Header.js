import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import { Search } from "react-router-dom";
import useData from "../utils/Hooks/useData";
import useStatus from "../utils/Hooks/useStatus";



const Header = () => {

    const status = useStatus();
    const [btn, setbtn] = useState("Login");

    return (
        <div className=" drop-shadow flex items-center    bg-neutral-900 border-b justify-between h-">
            <div className="image">
                <Link to="/">
                    <div className="mx-6 my-1 flex items-center">
                        <h1 className="text-4xl  flex justify-center" >🍜</h1>
                        <h1 className="font-patua text-slate-300 text-3xl font-thin">FoodHUb</h1>
                    </div>
                </Link>
            </div>

            <div className="" >
                <ul className="flex p-4 items-center gap-3">
                    {
                        status ? <li className=" bg-green-400 h-1 rounded-full text-neutral-900"> .</li > : <li className=" bg-red-400 h-1 rounded-full text-neutral-900">.</li>
                    }
                    <li className="text-slate-100 font-open hover:bg-neutral-400 p-1 rounded-md px-2"> <Link to="/About">About</Link>   </li>
                    <li className="text-slate-100 font-open hover:bg-neutral-400 p-1 rounded-md px-2"> <Link to="/Contact">Contact</Link>   </li>
                    <li className="text-slate-100 font-open hover:bg-neutral-400 p-1 rounded-md px-2">

                        <button onClick={() => {
                            btn === "Login" ?
                                setbtn("Logout")
                                : setbtn("Login")

                        }}
                            className="login">
                            {btn}
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    );
};
export default Header;