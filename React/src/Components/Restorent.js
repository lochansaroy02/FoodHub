import { CDN_URL } from "../utils/links";
import myData from '../../data.json';
import { useState } from "react";


const dataList = myData.restaurants;//its an array 
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
    const [data, setMyData] = useState(dataList);
    return (
        <>
            <div style={
                {
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px"
                }
            }>


                <button onClick={() => {
                    let filteredList = data.filter((rest) => rest.info.avgRating > 4.5)
                    setMyData(filteredList)
                }}>Top Rated</button>
                <button onClick={() => {
                    let filteredList = data.filter((rest) => rest.info.sla.deliveryTime < 20)
                    setMyData(filteredList)
                }}>Fast Delivery </button>
                <button onClick={() => {
                    let filteredList = data.filter((rest) => rest.info.veg == true)
                    setMyData(filteredList)
                }}>Veg </button>
            </div>
            <div className="restro">
                {data.map((restro) => (
                    <Card key={restro.info.id} resData={restro} />
                ))}
            </div>
        </>
    );
};
export default Restorent;