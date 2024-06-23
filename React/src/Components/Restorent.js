// import { CDN_URL } from "../utils/links";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/links";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Card from "./Card";
import { MdOutlineSearch } from "react-icons/md";
import useData from "../utils/Hooks/useData";
import { useSelector, useStore } from "react-redux";
import useMenu from "../utils/Hooks/useMenu";



const Restorent = () => {
    const RestroData = useSelector((store) => store.restro.resdata);
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    



    useEffect(() => {
        setFilteredData(RestroData);
    }, [RestroData]);

    return  (
        <>
            <div className="flex flex-col p-4 sm:items-center md:items-center">
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
                            const filterData = RestroData.filter((rest) =>
                                rest.info.name.toLowerCase().includes(input.toLowerCase())
                            );
                            setFilteredData(filterData);
                        }}
                    >
                        <h2 className="font-open text-white"> <MdOutlineSearch /> </h2>
                    </button>
                </div>

                
                <div className="w-full flex gap-6 text-sm justify-center md:justify-center">
                    <button
                        className="bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            let filteredList = RestroData.filter((rest) => rest.info.avgRating > 4);
                            setFilteredData(filteredList);
                        }}
                    >
                        Top Rated
                    </button>
                    <button
                        className="bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            let filteredList = RestroData.filter((rest) => rest.info.sla.deliveryTime < 30);
                            setFilteredData(filteredList);
                        }}
                    >
                        Fast Delivery
                    </button>
                    <button
                        className="bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            let filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                </div>
            </div>

            <div className="flex  justify-center flex-wrap w-full mr-0">
                {/* {RestroData?.map((restro) => (
                    <Link key={restro.info.id} to={"rest/" + restro.info.id}>
                        <Card onClick={handleClick(restro.info.id)}  resData={restro} />
                    </Link>
                ))} */}

                {RestroData?.map((restro) => (
                    <Link key={restro.info.id} to={"rest/" + restro.info.id}>
                        <Card onClick={() => {
                            setSelectedRestroId(restro.info.id);  // Assign the value to the variable
                            handleClick(restro.info.id);
                        }} resData={restro} />
                    </Link>
                ))}
            </div>
        </>
    );
};
export default Restorent;