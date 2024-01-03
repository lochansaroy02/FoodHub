import { API_URL, CDN_URL } from "../utils/links";
import { useState } from "react";





const Card = (props) => {
    
    const [cart, setCart] = useState(0);
    const addCart = () => {
        setCart();
    }

    const { resData } = props;
    return (
<>
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
                <div className=" mt-4 flex justify-center ">
                    {resData.info.id}
                </div>
            </div>
        </div>
</>
    );
};

export default Card;