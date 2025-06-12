import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRouting =()=>{
    const token=localStorage.getItem('token')
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

    if(!token || !isLoggedIn){
        return <Navigate to='/login' replace/>
    }
    return <Outlet/>
}
export default PrivateRouting