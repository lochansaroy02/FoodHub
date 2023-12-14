import { CDN_URL } from "../utils/links";

const AccBody = ({ items }) => {
    console.log(items)
    return (
        <div className="w-1/2 m-auto " >
            <ul >

                {items.map((item) =>



                    <div className=" border-b  ">

                        <div className="sm: flex flex-row-reverse ">


                            <div className="flex p-2 flex-col w-9/12">
                                <li className="p-2 text-2xl  ">{item.card.info.name}</li>

                                <div className="flex justify-between  p-2 m-2 gap-2">

                                    <div className="flex p-1 around  w-1/2  gap-2  ">

                                        <h2 className=" font-open p-1 bg-neutral-300 text-neutral-800 rounded-md" >
                                            Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                        </h2>

                                        {item.card.info.itemAttribute.vegClassifier == "VEG" ? <h2 className="text-slate-200 font-open p-1 bg-green-700 rounded-md">veg</h2> : <h2 className="text-slate-200 font-open p-1 bg-red-700 rounded-md">nonveg</h2>
                                        }

                                    </div>
                                    <div className=" ">
                                        <button className="bg-zinc-500 text-slate-100 px-4 py-2 rounded-lg">Add</button>
                                    </div>


                                </div>
                                <p className="p-1">

                                    {item.card.info.description}
                                </p>
                            </div>


                            <div className="  shadow-md   w-3/12 overflow-hidden p-2 m-2">


                                {item.card.info.imageId ? <img className=" w-full  rounded-lg  bg-gray-300 object-contain h-30 " src={CDN_URL + item.card.info.imageId} alt="" /> : <div className=" border border-white h-40 flex items-center justify-center rounded-lg  ">No image
                                </div>
                                }
                            </div>


                        </div>


                    </div>




                )


                }

            </ul >
        </div >
    )
}
export default AccBody;