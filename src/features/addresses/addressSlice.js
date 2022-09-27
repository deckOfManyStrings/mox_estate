import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import addressService from "./addressService";

const initialState = {
    addresses: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//create new address
export const createAddress = createAsyncThunk(
    'addresses/create',
    async (addressData , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.createAddress(addressData, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//get addresses
export const getAddresses = createAsyncThunk('addresses/getAll', async (_,thunkAPI) =>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await addressService.getAddresses(token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const addressSlice = createSlice({
        name: 'address',
        initialState,
        reducers: {
            reset: (state) => initialState
        },
    extraReducers: (builder) => {
            builder
                .addCase(createAddress.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(createAddress.fulfilled, (state, action) =>{
                    state.isLoading = false
                    state.isSuccess = true
                    state.addresses.push(action.payload)
                })
                .addCase(createAddress.rejected, (state, action) =>{
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                })
                .addCase(getAddresses.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(getAddresses.fulfilled, (state, action) =>{
                    state.isLoading = false
                    state.isSuccess = true
                    state.addresses = action.payload
                })
                .addCase(getAddresses.rejected, (state, action) =>{
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                })
    }
    }
)

export const {reset} = addressSlice.actions
export default addressSlice.reducer