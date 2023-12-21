import { useParams } from 'react-router-dom'
import useData from "../utils/Hooks/useData";
import useMenu from "../utils/Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import { useState } from 'react';
import { useParams } from 'react-router-dom';



const Menu = () => {




    const resID = useParams();
    const DATA = useData();
    const menu = useMenu(resID);

    const dataArr = DATA.filter((item) => item.info.id === resID.id)


    const [showIndex, setShowIndex] = useState(null);

    return (
        <div className=' items-center '>

            <div className="   flex justify-center ">
                <div className='  mb-2 bg-neutral-800 w-1/2  rounded-xl mt-2 p-4 h-full'>
                    {dataArr.map((item) =>

                        <div key={item.info.id} className='flex flex-col items-center '>


                            <h1 className='font-open text-3xl  p-2 '>

                                {item.info.name}
                            </h1>

                            <div className="  gap-8">
                                <div className='flex  gap-8'>

                                    <h2 className='font-open text-lg '>{item.info.locality}, {item.info.areaName}</h2>
                                    <h2 className='font-open text-lg '> {item.info.avgRating}</h2>
                                </div>
                                <p> {item.info.cuisines.toString()}</p>
                                {/* <h2 className='font-open text-lg '> {item.info.avgRating}</h2> */}
                            </div>
                        </div>
                    )}
                </div>


            </div>




            <div className=' flex flex-col '>
                {
                    menu.map((item, index) => <MenuCategory
                        key={item.name}
                        showitems={

                            index === showIndex ? true : false
                        } data={item.card.card}
                        setShowIndex={() => setShowIndex(index)}
                    />)
                }

            </div>


        </div>
    )
}
export default Menu;