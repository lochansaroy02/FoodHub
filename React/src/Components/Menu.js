import { useParams } from 'react-router-dom'
import useMenu from "../utils/Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShimmerMenu from './ShimmerMenu';




const Menu = () => {




    const resID = useParams();
    const data = useSelector((store) => store.restro.resdata);
    const menu = useSelector((store) => store.restro.menuData);
    const RestroData = data[1].card.card.gridElements.infoWithStyle.restaurants;
    let topRestro = data[4].card.card.gridElements.infoWithStyle.restaurants;
    
 
    useMenu(resID);

    const dataArr =  [...RestroData, ...topRestro]?.filter((item) => item.info.id === resID.id).slice(0,1)

    const [showIndex, setShowIndex] = useState(null);

    return menu?.length==0 ?( <ShimmerMenu/> ):  (
        <div className=' items-center mt-16'>
            
            <div className="   flex justify-center   ">
                <div className=" mb-2 bg-neutral-800 w-full  sm:w-1/2 sm:rounded-xl mt-2 p-4 h-full">


                    {dataArr?.map((item) =>
                        <>
                        
                     
                        <div key={item.id} className='flex flex-col items-center '>


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
                        </>
                    )}
                </div>


            </div>




            <div   className=' flex flex-col '>
                {
                    menu?.map((item, index) => <MenuCategory
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