import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CDN_URL } from "../utils/links";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
    ]
};

const Restorent = () => {
    const data = useSelector((store) => store.restro.resdata);
    const RestroData = data[1].card.card.gridElements.infoWithStyle.restaurants;
    let topRestro = data[4].card.card.gridElements.infoWithStyle.restaurants;
    const dataItem = [...RestroData, ...topRestro];


    const rowTitle = data[0].card.card.header.title;
    const mindRow = data[0].card.card.gridElements.infoWithStyle.info;

    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(RestroData);
    }, [RestroData]);

    return (
        <>
            <div className="flex flex-col p-4  mt-8 sm:items-center md:items-center">
            
                <div className="w-full flex mt-12  gap-6 text-sm justify-center md:justify-center">
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.avgRating > 4);
                            setFilteredData(filteredList);
                        }}
                    >
                        Top Rated
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.sla.deliveryTime < 30);
                            setFilteredData(filteredList);
                        }}
                    >
                        Fast Delivery
                    </button>

                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                    <button
                        className="bg-gray-700 text-lg hover:bg-gray-800 px-2 py-1 rounded-lg text-white"
                        onClick={() => {
                            const filteredList = RestroData.filter((rest) => rest.info.veg === true);
                            setFilteredData(filteredList);
                        }}
                    >
                        Veg
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="text-xl md:text-4xl md:p-4 flex justify-center md:justify-start md:ml-28">
                    {rowTitle}
                </h1>

                <div className=" flex  justify-center   ">
                    <div className=" flex flex-col w-3/4">
                        <Slider {...settings}>
                            {mindRow.map((item) => (
                                <div key={item.imageId} className="m-2 ">
                                    <img className="w-32 rounded-2xl px-1" src={`${CDN_URL}${item.imageId}`} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>



            <div className="flex flex-col">
                <h1 className="text-xl md:text-4xl px-4  md:p-4 flex justify-center md:justify-start md:ml-28">
                    {data[2].card.card.title}
                </h1>
                <div className="flex justify-center flex-wrap  w-full mr-0">
                    {topRestro.map((restro) => (
                        <Link key={restro.info.name} to={"rest/" + restro.info.id}>
                            <Card
                                onClick={() => {
                                    setSelectedRestroId(restro.info.id); // Assign the value to the variable
                                    handleClick(restro.info.id);
                                }}
                                resData={restro}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl md:text-4xl md:p-4 flex justify-center md:justify-start md:ml-28">
                    {data[1].card.card.header.title}
                </h1>
                <div className="flex justify-center flex-wrap w-full mr-0">
                    {filteredData.map((restro) => (
                        <Link key={restro.info.name} to={"rest/" + restro.info.id}>
                            <Card
                                onClick={() => {
                                    setSelectedRestroId(restro.info.id); // Assign the value to the variable
                                    handleClick(restro.info.id);
                                }}
                                resData={restro}
                            />
                        </Link>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Restorent;
