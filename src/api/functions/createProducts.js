import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const createProducts=async(newProduct)=>{
    try {
        const {data}=await axiosInstance.post(`${endPoints.product.create}`,newProduct)
        return data;
    } catch (error) {
        console.log(error);
        
    }
}