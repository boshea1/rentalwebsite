import React from 'react'
import Review from './Review'
import {data} from '../data/reviews'
import Nav from './Nav'
import { usePathname } from "next/navigation";


const Reviews = ({limit}) => {
  const path = usePathname()

    const i = data.slice(0, limit).map((e, index)=>{
        return <Review name={e.name}  rev={e.rev} stars={e.stars} key={index}/>
    })
  return (<div className='mt-9'>
    {path=='/reviews'&& <Nav/>}
        <h1 className='text-center text-5xl'>Reviews</h1>
    <div className='flex flex-wrap justify-center' key={0}>
        {i}
        <a href="./reviews">
           {limit<6 ? <Review name= 'more...' key={9012}/> : ''}
        </a>
        
    </div>
  </div>
  )
}

export default Reviews