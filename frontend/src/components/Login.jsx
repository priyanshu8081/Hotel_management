import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const schema = yup
    .object()
    .shape({
        email: yup.string().required(),
        password: yup.string().required(),
    })


const Login = () => {
    const handleClick = () => {
        document.getElementById('my_modal_3').close();
    }
    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });
    const handleData=async (data)=>{
        const userInfo={
            email:data.email,
            password:data.password
        }
        const res=await axios.post("http://localhost:9000/user/login",data);
        console.log(res)
        if(res.status==200)
        {
                toast("user login in  successfully..");
                // reset();
        document.getElementById('my_modal_3').close();
        localStorage.setItem("users",JSON.stringify(res.data.user));
        window.location.reload();
        }
    }
    return (
        <>
            <div className='max-w-screen-2xl md:px-20 px-4'>
                <ToastContainer/>
                {/* modal  */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-0">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login!</h3>
                        <form onSubmit={handleSubmit(handleData)}>
                            <fieldset className="fieldset rounded-box w-full border p-4 justify-center border-0">
                                {/* <legend className="fieldset-legend">Login</legend> */}

                                <label className="label">Email</label>
                                <input {...register('email')} type="email" className="input outline-0" placeholder="Email" />
                                {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}

                                <label className="label">Password</label>
                                <input {...register('password')} type="password" className="input outline-0" placeholder="Password" />
                                {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}

                                <div className='flex '><p>Not Registered? <Link to={"/singup"}><span onClick={handleClick} className='hover:link text-blue-700 font-bold'>Sing up now</span></Link> </p></div>

                                <button className="btn text-white bg-[#ff385c] mt-4 md:w-[320px]">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </dialog>
                {/* modal end */}
            </div>
        </>
    )
}

export default Login
