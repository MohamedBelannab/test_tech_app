import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
export const fetchProducts = createAsyncThunk('members/fetchProducts', async (url) => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw Error(error.response.data.message);
    } 
});

const productsSlice = createSlice({
    name:'products',
    initialState:{products:{}, status:"idle" },
    reducers:{
        setStatus: (state , action) => {
            state.status = action.payload
            if (action.payload == "idle") state.products = []
        },
      
    },
    extraReducers (builder){
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'success';
            state.products = action.payload;

        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.products = 'failed';
            
        })

    }
   

    
})
export default productsSlice.reducer
export  const {setStatus} = productsSlice.actions