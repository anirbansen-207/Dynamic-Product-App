import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const deleteProducts=async(id)=>{
    try {
        const {data}=await axiosInstance.post(`${endPoints.product.delete}`,{id})
        return data;
    } catch (error) {
        console.log(error);
        
    }
}