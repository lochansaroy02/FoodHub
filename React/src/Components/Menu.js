import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import useData from "../utils/Hooks/useData";
import useMenu from "../utils/Hooks/useMenu";
import { CDN_URL } from "../utils/links";

const Menu = () => {


    const resID = useParams();
    const DATA = useData();
    const menu = useMenu(resID);
    const [Name, setName] = useState("");
    const [Category, setCategory] = useState("");






    useEffect(() => {
        setNameFn()

    })


    const setNameFn = () => {
        for (let i = 0; i < DATA.length; i++) {
            if (DATA[i].info.id === resID.id) {
                setName(DATA[i].info.name)
            }
        }


    }

    return (
        <div className="bg-neutral-900 h-full flex flex-col items-center">
            <h1 className="text-white  p-2 text-4xl flex items-center ">
                {Name}
                <p>{Category}</p>
            </h1>

            <ul className="text-white bg-neutral-900 w-full flex flex-col items-center h-full">
                {menu.map(item => <li key={item.card.info.id} className="bg-neutral-900 border-b  flex flex-col justify-center  h-full py-3 w-4/6 mt-2 p-0" >

                    <div>



                        <div className="flex justify-between  ">


                            <div className=" flex p-0 flex-col  justify-between   w-3/4  pl-2  ">
                                <div>

                                    <h3 className="font-open text-xl mt-2 font-semibold">
                                        {item.card.info.name}
                                    </h3>
                                </div>

                                <div className=" flex  flex-col">
                                    <div className="flex my-2">

                                        <h3 className="mr-5 p-2 bg-gray-200 text-base flex justify-center items-center text-slate-800 rounded-lg ">

                                            <span>Rs. </span> {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                        </h3>
                                        <h3 className="p-2">
                                            <span>Category: </span> {item.card.info.category}
                                        </h3>
                                    </div>
                                    <p className="text-slate-200 text-sm mt-2" >{item.card.info.description}</p>
                                </div>






                            </div>

                            <div className="w-40 h-fit flex  flex-col justify-between items-center  ">


                                <div className="w-40 h-30 bg-gray-200 overflow-hidden rounded-lg border" >

                                    {item.card.info.imageId ? <img className="object-cover" src={CDN_URL + item.card.info.imageId} alt="" /> : <div className=" p-10 flex items-center justify-center border-none bg-neutral-900"> <h2> No image</h2> </div>}
                                </div>
                                <div className="bg-white flex items-center justify-center px-2 mt-2 py-1 w-fit  rounded-2xl  ">

                                    <button className=" bg-white text-slate-800 px-2"    >Add </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
                )}
            </ul>
        </div>

    )
}
export default Menu;