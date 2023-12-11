import { MENU_API } from "../utils/links";
import { API_URL } from "../utils/links";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/links";
import { useParams } from 'react-router-dom'

const Menu = () => {
    const [DATA, setDATA] = useState([]);
    const [Name, setName] = useState("");

    const fetchData = async () => {
        let data = await fetch(API_URL);
        const json = await data.json();
        const Data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setDATA(Data)

    }


    const id = useParams();
    const Id = id.id;

    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        let data = await fetch(MENU_API + Id);
        const json = await data.json();
        const category = json.data.cards[2].groupedCard.cardGroupMap.REGULAR;
        setMenu(category.cards[2].card.card.itemCards)

    }

    useEffect(() => {
        fetchData()


    }, [])

    useEffect(() => {
        setNameFn()
        fetchMenu()
    })


    const setNameFn = () => {
        for (let i = 0; i < DATA.length; i++) {
            if (DATA[i].info.id === Id) {
                setName(DATA[i].info.name)
            }
        }


    }

    return (
        <div>
            <h1>
                {Name}
            </h1>
            <ul>
                {menu.map(item => <li key={item.card.info.id}>
                    {item.card.info.name} - Rs.
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
                )}
            </ul>
        </div>

    )
}
export default Menu;