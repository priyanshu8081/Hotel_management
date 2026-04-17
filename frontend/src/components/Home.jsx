import React from 'react'
import Card from './Card'
import axios from 'axios';
import { useState,useEffect } from 'react';
const Home = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
        handleGet();
    }, [])
    const handleGet = async () => {
        const res = await axios.get("http://localhost:9000/new/get");
        setList(res.data);
    }
    return (
        <>
            <Card list={list} />
        </>
    )
}

export default Home
