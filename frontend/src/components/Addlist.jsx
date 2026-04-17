import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
const schema = yup
    .object()
    .shape({
        title: yup.string().required(),
        description: yup.string().required(),
        image: yup.string(),
        price: yup.number().required(),
        location: yup.string().required(),
        country: yup.string().required()
    })

const Addlist = () => {

    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });
    const handleClick=async(data)=>{
        const res=await axios.post(`http://localhost:9000/new/insert`,data);
        console.log(res.data);
    }
    return (
        <>
            <div className='max-w-screen-2xl md:px-20 px-4 my-50 md:my-20 md:mx-80 mx-5'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Add Hotel </legend>
                    <form onSubmit={handleSubmit(handleClick)}>
                        <label className="label">Title</label>
                        <input {...register('title')} type="text" className="input outline-none" placeholder="Enter The Title of Your Hotel" />

                        <label className="label">Description</label>
                        <input {...register('description')} type="text" className="input outline-none" placeholder="Enter Hotel Description" />

                        <label className="label">Image</label>
                        <input {...register('image')} type="text" className="input outline-none" placeholder="Enter Image Url" />
                        <label className="label">Price</label>
                        <input {...register('price')} type="number" className="input outline-none" placeholder="Enter Price" />
                        <label className="label">Location</label>
                        <input {...register('location')} type="text" className="input outline-none" placeholder="Enter Hotel Location" />
                        <label className="label">Country</label>
                        <input {...register('country')} type="text" className="input outline-none" placeholder="Enter Hotel Country" />

                        <button className="btn btn-neutral mt-4">Add</button>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default Addlist
