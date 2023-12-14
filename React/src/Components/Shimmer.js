import useData from "../utils/Hooks/useData"


const Shimmer = () => {

    const data = useData();
    console.log(data)
    return (
        <div className="flex gap-2 flex-wrap ">
            {data.map((item) =>
                <div className="bg-gray-300 m-4 w-60 h-[350]"></div>

            )}


        </div>)
}
export default Shimmer
