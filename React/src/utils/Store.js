import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import restReducer from './restroSlice'


const Store = configureStore({
    reducer: {
        cart: cartReducer,
        restro: restReducer
    }
})

export default Store;