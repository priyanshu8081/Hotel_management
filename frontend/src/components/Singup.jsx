import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const schema = yup
    .object()
    .shape({
        fullname: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
    })

const Singup = () => {
    const handleClick = () => {
        document.getElementById('my_modal_3').close();
    }
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const handleData =async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        const res=await axios.post("http://localhost:9000/user/singup",data);
        console.log(data)
        console.log(res)
        if(res.data)
        {
                toast("user singup successfully..");
                reset();
        }
        localStorage.setItem("users",JSON.stringify(res.data.user));
    }
    return (
        <div className='min-w-screen-2xl md:px-20 px-4 flex justify-center'>
            <ToastContainer/>
            <form onSubmit={handleSubmit(handleData)} >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-55 md:my-32 ">
                    <legend className="fieldset-legend">SingUp</legend>

                    <label className="label">Full Name</label>
                    <input {...register(('fullname'))} type="text" className="input outline-0" placeholder="Enter Your FullName.." />
                    {errors?.fullname && <p className='text-red-500'>{errors.fullname.message}</p>}

                    <label className="label">Email</label>
                    <input {...register(('email'))} type="email" className="input outline-0" placeholder="Enter Your Email" />
                    {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input {...register(('password'))} type="password" className="input outline-0" placeholder="Enter Your Password" />
                    {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <div className='flex justify-between'><p>Have Account ? <Link to={"/"} ><span onClick={handleClick} className='text-blue-700'>Login In</span></Link></p><Link to={"/"}> <p>Go to home</p></Link></div>
                    <button className="btn btn-neutral mt-4">SingUp</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Singup
