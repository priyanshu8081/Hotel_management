import React from 'react'

const Card = ({ list }) => {
    return (
        <>
            <div className='max-w-screen-2xl md:px-20 px-4'>
                <h2 className='ms-2  mt-18 md:mt-20 mb-5'>All Listing</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        list.map((item, ind) => (
                            <div key={ind} className="card bg-base-100 w-[100%] shadow-sm mt-0 mb-2 hover:scale-102 transition duration-500">
                                <figure>
                                    <img className='h-60 w-full object-cover'
                                        src={item.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title flex justify-between">
                                        {item.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{item?.description}</p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">Per Night</div>
                                        <div className="badge badge-outline"> &#8377; {item?.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card
