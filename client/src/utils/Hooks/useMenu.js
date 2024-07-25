import { MENU_API } from "../links"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../restroSlice";





const useMenu = (resID) => {

    const dispatch = useDispatch();


    const Id = resID.id;
    

    const fetchMenu = async () => {
        let data = await fetch(MENU_API + Id);
        const json = await data.json();
        const category = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
        const itemcard = category?.cards;
        const typeString = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

        const type = itemcard?.filter((item) => item.card?.card?.["@type"] === typeString)
        
        dispatch(addMenu(type))





    }


    useEffect(() => {
        fetchMenu()


    }, [])




}

export default useMenu;
