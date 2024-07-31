import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import restReducer from './restroSlice'
import userReducer from './userSlice'


const Store = configureStore({
    reducer: {
        cart: cartReducer,
        restro: restReducer,
        user: userReducer
    }
})

export default Store;