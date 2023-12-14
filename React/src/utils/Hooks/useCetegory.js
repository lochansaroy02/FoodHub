import useMenu from './useMenu'
import { useParams } from 'react-router-dom'


const useCetegory = () => {
    const resID = useParams()
    const menu = useMenu()
    const string = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const category = menu.filter((item) => item?.card?.card?.["@type"] === string);
    return category;
}

export default useCetegory;
