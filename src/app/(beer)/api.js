import axios from "axios"

export const getProducts = async () => {
    try {
        const respose = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/products`)
        return respose.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getProductById = async (id) => {
    try {
        const respose = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/products/${id}`)
        return respose.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getStockPrice = async (code) => {
    try {
        const respose = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/stock-price/${code}`)
        return respose.data
    } catch (error) {
        console.log(error)
        return null
    }
}

