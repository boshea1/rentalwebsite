import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Nav = () => {
  return (
    <div dir='rtl'>
    <div className=' flex mt-4 mr-5 right-0 start-0 font-poppins'>
        <div className='ml-4'>
        <a className='ml-10 mt-4 mr-4'>Manage bookings 
        <Image 
              src="/book.svg"
              alt="Book Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
              /> 
        </a>
        </div>
        <div className='mr-4'>
        <a className='ml-10 mt-4'>Log in | Register
        <Image
              src="/person.svg"
              alt="Person Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
              />
        </a>
            </div>
    </div>
    <div className={'flex justify-center m-10 text-white'}>
        <Button  children='Rent'/>
        <Button  children='Share'/>
        <Button  children='buy'/>
    </div>
    </div>
  )
}

export default Nav