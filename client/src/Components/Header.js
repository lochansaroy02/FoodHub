import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { Search } from "react-router-dom";
import useData from "../utils/Hooks/useData";
import useStatus from "../utils/Hooks/useStatus";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const [btn, setbtn] = useState("Login");


    const RestroData = useSelector((store) => store.restro.resdata);
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    return (
        <div className=" drop-shadow flex items-center fixed z-40  w-full inset-x-0 top-0  bg-neutral-900 border-b justify-between h-">
            <div className="image">
                <Link to="/">
                    <div className="mx-6 my-1 flex items-center">
                        <h1 className="text-4xl  flex justify-center" >🍜</h1>
                        <h1 className="font-patua text-slate-300 text-3xl font-thin">FoodHUb</h1>
                    </div>
                </Link>
            </div>

            
            <div className="sm:m-4 m-4 flex items-center">
                    <input
                        className="border w-96 h-10 rounded-full text-white pl-4 border-gray-300 bg-neutral-900"
                        type="text"
                        placeholder="Search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className="text-2xl p-1 rounded-full m-4 bg-zinc-600"
                        onClick={() => {
                            const filterData = dataItem.filter((rest) =>
                                rest.info.name.toLowerCase().includes(input.toLowerCase())
                            );
                            setFilteredData(filterData);
                        }}
                    >
                        <h2 className="font-open text-white"><MdOutlineSearch /></h2>
                    </button>
                </div>

            <div className="" >
                <ul className=" sm:flex p-4 items-center gap-3 hidden">


                    <div className="flex  ">

                        <li className="text-slate-100   text-2xl  relative font-open hover:bg-neutral-400 p-2 rounded-md "> <Link to="/Cart"><FaCartShopping />
                            <span className="text-sm font-semibold   text-red-500 absolute  top-0 right-px  ">
                                {cartItems.length}
                            </span>
                        </Link>
                        </li>


                    </div>


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