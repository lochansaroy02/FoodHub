import { CDN_URL } from "../utils/links";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/links";
import Shimmer from "./Shimmer";

const Card = (props) => {
    const { resData } = props;
    return (
        <div className="card">
            <div className="restro-image">
                <img
                    src={
                        CDN_URL + resData.info.cloudinaryImageId
                    }
                    alt=""
                />
            </div>
            <div className="info">
                <h1>{resData.info.name}</h1>
                <div className="rating  ">
                    <h3>Rating: {resData.info.avgRating}</h3>
                    <h3>Time :{resData.info.sla.deliveryTime} Mins</h3>
                </div>
                <div className="cusines">
                    <p>{resData.info.cuisines.join(", ")}</p>
                </div>
            </div>
        </div>

    );
};




const Restorent = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        fetchData()
    }, []);


    const fetchData = async () => {
        let data = await fetch(API_URL);
        const json = await data.json();
        const Data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(Data)
        setFilteredData(Data)

    }
    const [input, setInput] = useState("");



    return data.length === 0 ? <Shimmer /> : (
        <>


            <div style={
                {
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "8px"
                }
            }>

                <div className="search ">
                    <input type="text" value={input} onChange={
                        (e) => {
                            setInput(e.target.value);
                        }
                    } />
                    <button
                        onClick={() => {
                            const filterData = data.filter((rest) =>
                                rest.info.name.toLowerCase().includes(input.toLowerCase())
                            )
                            setFilteredData(filterData)

                        }
                        }

                    >search</button>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px"
                }}>


                    <button onClick={() => {
                        let filteredList = data.filter((rest) => rest.info.avgRating > 4.5)
                        setFilteredData(filteredList)
                    }}>Top Rated</button>
                    <button onClick={() => {
                        let filteredList = data.filter((rest) => rest.info.sla.deliveryTime < 20)
                        setFilteredData(filteredList)
                    }}>Fast Delivery </button>
                    <button onClick={() => {
                        let filteredList = data.filter((rest) => rest.info.veg == true)
                        setFilteredData(filteredList)
                    }}>Veg </button>
                </div>
            </div>


            <div className="restro">
                {filteredData.map((restro) => (
                    <Card key={restro.info.id} resData={restro} />
                ))}
            </div>
        </>
    );
};
export default Restorent;