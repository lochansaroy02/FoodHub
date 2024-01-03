import { useState, useEffect } from "react";
import { API_URL } from "../links";

import { useDispatch, useSelector } from "react-redux";
import { addMenu, addRestro } from "../restroSlice";

const useData = () => {

    const RestData = useSelector((store) => store.restro.resData)
    const dispatch = useDispatch();


    const fetchData = async () => {
        let data = await fetch(API_URL);
        const json = await data.json();
        const Data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        dispatch(addRestro(Data))


    }
    useEffect(() => {

        !RestData && fetchData()
    }, []);


}

export default useData;