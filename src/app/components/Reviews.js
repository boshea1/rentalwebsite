import React from 'react'
import Review from './Review'
import {data} from '../data/reviews'

const Reviews = ({limit}) => {
    
    const i = data.slice(0, limit).map((e)=>{
        return <Review name={e.name}  rev={e.rev} stars={e.stars}/>
    })
  return (<div className='mt-9'>
        <h1 className='text-center text-5xl'>Reviews</h1>
    <div className='flex flex-wrap justify-center'>
        {i}
        <a href="./reviews">
           {limit<6 ? <Review name= 'more...'/> : ''}
        </a>
        
    </div>
  </div>
  )
}

export default Reviews