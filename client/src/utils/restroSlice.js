import { createSlice } from "@reduxjs/toolkit";


const restroSlice = createSlice({
    name: 'restro',
    initialState: {
        resdata: null,
        menuData: null
    },
    reducers: {
        addRestro: (state, action) => {
            state.resdata = action.payload;
        },
        addMenu: (state, action) => {
            state.menuData = action.payload;
        }
    }
})

export const { addRestro, addMenu } = restroSlice.actions;
export default restroSlice.reducer;