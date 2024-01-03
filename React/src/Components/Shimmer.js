import useData from "../utils/Hooks/useData"


const Shimmer = () => {

    const data = useData();

    return (

        <div className="animate-pulse">



            <div className="flex flex-col  p-4 sm:items-center  md:items-center ">

                <div className=" sm:m-4 m-4  flex items-center ">
                    <input className="border w-96 h-10  rounded-full text-white pl-4 bg-gray-400 " type="text" placeholder="Search" />


                    <button className="  text-2xl p-1 rounded-full m-4 bg-zinc-600"

                    ><h2 className=" font-open text-white h-8 w-8">   </h2></button>
                </div>

                <div className=" w-full flex  gap-6  justify-center md:justify-center " >


                    <button className=" bg-gray-400 hover:bg-gray-800 px-2 py-1 rounded-lg text-gray-400 ">Top Rated</button>
                    <button className=" bg-gray-400 hover:bg-gray-800 px-2 py-1 rounded-lg text-gray-400 ">Fast Delivery </button>
                    <button className=" bg-gray-400 hover:bg-gray-800 px-2 py-1 rounded-lg text-gray-400 ">Veg </button>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-center ">


                {data?.map((item) =>
                    <div className="bg-gray-400 rounded-xl  m-4 w-60 h-[300]"></div>

                )}


            </div>
        </div>

    )
}
export default Shimmer
