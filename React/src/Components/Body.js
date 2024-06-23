import Restorent from "./Restorent";
import Menu from "./Menu";
import Shimmer from "./Shimmer";
import useData from "../utils/Hooks/useData";
import { useStore } from "react-redux";
import useMenu from "../utils/Hooks/useMenu";
import { useSelector } from "react-redux";
import Search from "./Search";





const Body = () => {

    const data = useSelector((store) => store.restro.resdata);

    useData()
    return (
        <div className=" bg-neutral-900  ">


            {data && data.length > 0 ? <Restorent data={data} /> : <Shimmer />}
        </div>
        // <Search/> 

    );
};



export default Body;