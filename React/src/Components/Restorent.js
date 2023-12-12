import { CDN_URL } from "../utils/links";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/links";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Card = (props) => {


    const { resData } = props;
    return (
        <div className=" w-60  drop-shadow-lg border overflow-hidden border-zinc-800 hover:border hover:border-gray-300  hover:shadow-xl rounded-xl m-4 h-[350] bg-zinc-800 ">
            <div className=" h-40 p-1  overflow-hidden" >
                <img className="w-full h-full object-cover rounded-xl  hover:scale-105 transition-all duration-200" src={CDN_URL + resData.info.cloudinaryImageId} />
            </div>



            <div className=" p-3 rounded-b-xl">
                <h1 className="font-open font-semibold text-lg  text-white">{resData.info.name}</h1>


                <div className="flex p-2 gap-3 font-open text-white  justify-between">
                    <div className=" bg-green-300 p-1 border-solid border-2 shadow-inner  border-green-700 flex rounded-2xl ">

                        <h3 className="drop-shadow-lg"> ⭐</h3>
                        <h3 className="px-1 text-green-800 ">  {resData.info.avgRating}</h3>
                    </div>
                    <div className=" bg-red-300 p-1 border-solid border-2 shadow-inner  border-red-700 flex rounded-2xl ">
                        <h3 className="px-1 text-red-800" >{resData.info.sla.deliveryTime} Mins</h3>
                    </div>
                </div>
                <div className=" ">
                    <p className="text-slate-200 font-open font-thin ">{resData.info.cuisines.join(", ")}</p>
                </div>
            </div>
        </div>

    );
};




const Restorent = () => {
    const [data, setData] = useState(API_URL);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        fetchData()
    }, []);


    const fetchData = async () => {
        let data = await fetch(API_URL);
        const json = await data.json();
        // const Data = json?.data?.cards[2]?.card?.card?.itemCard;
        const Data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(Data)
        setFilteredData(Data)


    }


    const [input, setInput] = useState("");

    const buttonClicked = () => {
        const filterData = data.filter((rest) =>
            rest.info.name.toLowerCase().includes(input.toLowerCase())
        )
        setFilteredData(filterData);
    }

    if (data.length === 0) {
        return <Shimmer />
    }

    return data.length === 0 ? <Shimmer /> : (
        <>



            <div className="flex flex-col items-center p-4 ">

                <div className="m-4">
                    <input className="border w-96 h-10  rounded-full focus:border-green-600 text-white pl-4 border-gray-300 bg-neutral-900" type="text" placeholder="Search" value={input} onChange={
                        (e) => {
                            setInput(e.target.value);
                        }
                    } />
                    <button className="  text-2xl p-1 rounded-full mx-2"
                        onClick={() => {
                            const filterData = data.filter((rest) =>
                                rest.info.name.toLowerCase().includes(input.toLowerCase())
                            )
                            setFilteredData(filterData)

                        }
                        }
                    ><h2 className="mx-2 font-open text-white"><span></span> </h2></button>
                </div>

                <div className=" w-full flex  gap-6" >


                    <button className=" bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white "
                        onClick={() => {
                            let filteredList = data.filter((rest) => rest.info.avgRating > 4)
                            setFilteredData(filteredList)
                        }}>Top Rated</button>
                    <button className=" bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white "
                        onClick={() => {
                            let filteredList = data.filter((rest) => rest.info.sla.deliveryTime < 20)
                            setFilteredData(filteredList)
                        }}>Fast Delivery </button>
                    <button className=" bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded-lg text-white "
                        onClick={() => {
                            let filteredList = data.filter((rest) => rest.info.veg == true)
                            setFilteredData(filteredList)
                        }}>Veg </button>
                </div>
            </div>


            <div className="flex  justify-center flex-wrap  mr-0">
                {filteredData.map((restro) => (
                    <Link key={restro.info.id} to={"rest/" + restro.info.id}>
                        <Card resData={restro} />
                    </Link>
                ))}
            </div>
        </>
    );
};
export default Restorent;