import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Item from '@/app/components/Item';
// import '../app/globals.css'
// import Item from '@/app/components/Item'

const cars = (params) => {
  const[data,setData]=useState([]);
  const router = useRouter()
  console.log(router.query);
  useEffect(()=>{
    // setIsLoading(true);
    axios.get('http://localhost:1337/api/cars?populate=*').then(response=>{
        setData(response.data); setIsLoading(false)})
    .catch(error =>{
        console.error('theres an erro1 fetching data', error);
    })
},[])

const x = data.data?.filter((item)=>{
  return item.attributes.Type==router.query.cars;
})

console.log('x',x)
  return (<>
    <div>
    {x? <Item
        key={''}
        img={`http://localhost:1337/uploads/${x[0].attributes.img.data.attributes.hash}.png`}
        model= {x[0].attributes.Model}
        rate={x[0].attributes.rate}
        type={x[0].attributes.Type}
        /> :<h1>Loading</h1>}
    </div>
  </>
  )
}

export default cars