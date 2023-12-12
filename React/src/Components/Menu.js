import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import useData from "../utils/Hooks/useData";
import useMenu from "../utils/Hooks/useMenu";

const Menu = () => {


    const resID = useParams();
    const DATA = useData();
    const menu = useMenu(resID);
    const [Name, setName] = useState("");






    useEffect(() => {
        setNameFn()
    })


    const setNameFn = () => {
        for (let i = 0; i < DATA.length; i++) {
            if (DATA[i].info.id === resID.id) {
                setName(DATA[i].info.name)
            }
        }


    }

    return (
        <div className="bg-amber-200">
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