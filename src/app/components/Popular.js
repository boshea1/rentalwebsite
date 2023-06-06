import React from 'react'
import Item from './Item'


const Popular = () => {
  return (
    <div>
        <h1 className='text-center mt-20 text-4xl font-poppins'>
            Popular motors
        </h1>
    <div className='grid grid-cols-2  place-items-center pt-3 gap-10 md:grid-cols-4'>
    <Item img='/vw-caddy-maxi-5d-weiss-2017.png'
        model='VW Caddy'
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
    </div>
    </div>
  )
}

export default Popular