import { useParams } from 'react-router-dom'
import useData from "../utils/Hooks/useData";
import useMenu from "../utils/Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import { useState } from 'react';



const Menu = () => {


    const resID = useParams();
    const DATA = useData();
    const menu = useMenu(resID);



    const Info = DATA.map((item) => item.info)


    // console.log(Info.filter((item)=> ))
    const DataArr = Info.filter((item) => item.id === resID.id)
    // const { name, id, cuisine } = DataArr[0]




    const [showIndex, setShowIndex] = useState(null);



    return (
        <div>
            <div>

            </div>

            <div>
                {
                    menu.map((item, index) => <MenuCategory
                        showitems={

                            index === showIndex ? true : false
                        } data={item.card.card}
                        setShowIndex={() => setShowIndex(index)}
                    />)
                }

            </div>


        </div>
    )
}
export default Menu;