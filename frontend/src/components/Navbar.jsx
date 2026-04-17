import React, { useContext } from 'react'
import { GrCompass } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Singup from './Singup';
import LogOut from './LogOut';
import Login from './Login';
import { AppContext } from '../context/AuthProvider';
const Navbar = () => {
    const { authUser, setAuthUSer } = useContext(AppContext);
    return (
        <>
            <div className='max-w-screen-2xl container  md:px-20 px-4 z-10 fixed top-0 left-0 right-0'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li> <Link to={"/"}>Home</Link> </li>
                                <li><a>All Listing</a></li>
                                <li><Link to={"/addlist"} >Add Listing</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost md:p-0 text-2xl md:text-3xl text-[#ff385c]  "><GrCompass /></a>
                        <ul className="menu menu-horizontal px-1 hidden ml-2 lg:flex">
                            <li><Link to={"/"} >Home </Link ></li>
                            <li><a>All Listing</a></li>
                            <li><Link to={"/addlist"} >Add Listing</Link></li>
                        </ul>
                    </div>
                    {
                        authUser ? <LogOut /> :
                            <div className="navbar-end ">
                                <a className="btn btn-sm rounded-2xl" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a>
                                <Login />
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
