import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import About from "./About";
import { Search } from "react-router-dom";
import useData from "../utils/Hooks/useData";
import useStatus from "../utils/Hooks/useStatus";
import { useSelector } from "react-redux";


const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
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
                <ul className=" sm:flex p-4 items-center gap-3 hidden">
                    {
                        status ? <li className=" bg-green-400 h-1 rounded-full text-neutral-900"> .</li > : <li className="  h-1 rounded-full text-neutral-900">.</li>
                    }
                    <li className="text-slate-100 font-open hover:bg-neutral-400 p-1 rounded-md px-2"> <Link to="/Cart">Cart ({cartItems.length})</Link>   </li>
                    <li className="text-slate-100 font-open hover:bg-neutral-400 p-1 rounded-md px-2"> <Link to="/About">About</Link>   </li>

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
                <div>
                    <ul className="sm:mx-2 flex items-center ">
                        <li className="text-slate-100 sm:hidden  font-open hover:bg-neutral-400 p-1 rounded-md px-2"> <Link to="/Cart">Cart ({cartItems.length})</Link>   </li>
                        <li className="sm:hidden px-2  md:hidden">
                            <HiOutlineMenu />
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};
export default Header;