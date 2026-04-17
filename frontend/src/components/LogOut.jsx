import React, { useContext } from 'react'
import { AppContext } from '../context/AuthProvider';
import { toast,ToastContainer } from 'react-toastify';
const LogOut = () => {
    const { authUser, setAuthUSer } = useContext(AppContext);
    const handleLogout=()=>{
        setAuthUSer({
            ...authUser,
            user:null,
        })
        localStorage.removeItem("users");
        toast.success("user logout successfully..");
        window.location.reload();
    }
    return (
        <div className='max-w-screen-2xl container  md:px-20 px-4'>
            <ToastContainer/>
            <div className='ms-37 md:ms-130'>
                <button onClick={handleLogout} className='btn btn-sm rounded-1xl'> LogOut</button>
            </div>
        </div>
    )
}

export default LogOut
