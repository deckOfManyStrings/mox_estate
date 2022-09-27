import axios from "axios";

const API_URL = '/api/address/'

//create new address
const createAddress = async (addressData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, addressData, config)

    return response.data
}

//create get all user addresses
const getAddresses = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const addressService = {
    createAddress,
    getAddresses
}

export default addressService