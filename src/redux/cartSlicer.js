import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const product = state.products.find(product => (
                product.id === action.payload.id
            ))
            if(product) product.number = product.number + action.payload.number
            else {
            state.products.push(action.payload);
            state.count = state.count + 1
            }
        },
        removeFromCart: (state, action) => {
            state.products.splice(state.products.findIndex(item => item.id === action.payload), 1)
            state.count = state.count - 1
        } ,
        // increaseCount: state => {
        //   state.count = state.count + 1 
        // },
        // decreaseCount: state => {
        //   state.count = state.count - 1 
        // },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer