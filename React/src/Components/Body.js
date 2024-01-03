import Restorent from "./Restorent";
import Menu from "./Menu";
import Shimmer from "./Shimmer";
import useData from "../utils/Hooks/useData";
import { useStore } from "react-redux";

const Body = () => {

    useData()
    return (
        <div className=" bg-neutral-900  ">
            <Restorent />
        </div>

    );
};



export default Body;