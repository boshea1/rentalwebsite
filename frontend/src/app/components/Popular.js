"use client" //this is a client component
import React, { useEffect, useState, localStorage } from 'react'
import Item from './Item'
import axios from 'axios'

const Popular = () => {
    const [data,setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        // setIsLoading(true);
        axios.get('http://localhost:1337/api/cars?populate=*').then(response=>{
            setData(response.data); setIsLoading(false)})
        .catch(error =>{
            console.error('theres an erro1 fetching data', error);
        })
    },[])
    return (
        <div>
        <h1 className='text-center mt-20 text-4xl font-poppins'>
            Popular motors
        </h1>
            {isLoading?<div className='bg-purple-600 text-center text-xl text-white'>loading...</div> : 
            <div className='grid grid-cols-2  place-items-center pt-3 gap-10 md:grid-cols-4'>
        {data.data?.map((x,index) => {return <Item
        key={index}
        img={`http://localhost:1337/uploads/${x.attributes.img.data.attributes.hash}.png`}
        model= {x.attributes.Model}
        rate={x.attributes.rate}
        type={x.attributes.Type}
        />})}
    
    </div>}
     {/* <div className='grid grid-cols-2  place-items-center pt-3 gap-10 md:grid-cols-4'>
    <Item img='http://localhost:1337/uploads/vw_golf_stw_white_2020_098ed18d9c.png'
         model = 'JW Estate' 
         rate='£29.99'
         type='People carrier'/> 
     <Item img='vw-golf-stw-white-2020.png' 
         model='VW Golf'
         rate='£25.99'
         type='Estate'/> 
    <Item img='vw-polo-5d-weiss-2020.png' 
         model='VW Polo' 
         rate='£26.99' 
        type='Saloon'/> 
     <Item img='vw-t-cross-5d-suv-blue-2022.png' 
         model='VW Cross' 
         rate='£28.99' 
         type='SUV'/> 
    </div> */}
    </div>
  )
}

export default Popular