import Restorent from "./Restorent";
import Menu from "./Menu";
import Shimmer from "./Shimmer";
import useData from "../utils/Hooks/useData";
import { useDispatch, useStore } from "react-redux";
import useMenu from "../utils/Hooks/useMenu";
import { useSelector } from "react-redux";
import Search from "./Search";
import { Carousel } from "react-responsive-carousel";
import Crousel from "./Crousel";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";





const Body = () => {


    const getUser = async( )=>{
        const user =  await fetch('http://localhost:3000/');
        const json  =  await user.json();
        console.log(json)
    }



    const data = useSelector((store) => store.restro.resdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addUser({
            name:'lochan',
            age: 25
        }))
    }, [])
    
    const userData = useSelector((store) => store.user.items);

    useData()
    return (
        <div className=" bg-neutral-900  mt-12 ">
            {data && data.length > 0 ? <Restorent data={data} /> : <Shimmer />}
        </div>

    );
};



export default Body;