import { MENU_API } from "../links"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";





const useMenu = (resID) => {



    const Id = resID.id;


    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        let data = await fetch(MENU_API + Id);
        const json = await data.json();
        const category = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

        setMenu(category)

        const itemcard = category.cards;
        const typeString = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"


        const type = itemcard.filter((item) => item.card?.card?.["@type"] === typeString)
        setMenu(type)





    }


    useEffect(() => {
        fetchMenu()


    }, [])

    return menu;



}

export default useMenu;