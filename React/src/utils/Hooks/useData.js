import { useState, useEffect } from "react";
import { API_URL } from "../links";

const useData = () => {


    const [DATA, setDATA] = useState([]);
    const fetchData = async () => {
        let data = await fetch(API_URL);
        const json = await data.json();
        const Data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setDATA(Data)

    }
    useEffect(() => {

        fetchData()
    }, []);

    return DATA;
}

export default useData;