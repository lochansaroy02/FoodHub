import { MENU_API } from "../links"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";





const useMenu = (resID) => {



    const Id = resID.id;


    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        let data = await fetch(MENU_API + Id);
        const json = await data.json();
        const category = json.data.cards[2].groupedCard.cardGroupMap.REGULAR;
        const setmenu = category.cards[2].card.card.itemCards;
        setMenu(setmenu)
      

    }

    useEffect(() => {
        fetchMenu()


    }, [])

    return menu;



}

export default useMenu;