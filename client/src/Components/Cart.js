import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="">
            <div className=" w-1/2 flex flex-col items-center  m-auto p-4  ">
                <h1 className="text-2xl mb-2 ">Cart</h1>
                <button className="p-2 " onClick={handleClearCart}>clear </button>
            </div>
            <div className="w-3/4 m-auto  ">
                {cartItems.length === 0 ? <h1 className=" text-center">Cart is empty </h1> :
                    <AccBody items={cartItems} msg={"remove"} />
                }
            </div>

        </div>
    )
}
export default Cart;
