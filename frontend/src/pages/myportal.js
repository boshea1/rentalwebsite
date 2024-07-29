import React from 'react'
import Nav from '../app/components/Nav'
import { auth} from '../firebase.config'
import '../app/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'


const myportal = () => {
  const [user, loading] = useAuthState(auth)
  
 
  return (
    <div>
        <Nav/>
        { !user ? <h1 className='text-center'>Unauthorised, Please sign In!</h1> 
        :
        loading? 'Loading' :
        <>
        <div className='ml-10 mt-10'>
          <h1>{user?'Logged In': 'Logged Out'}</h1>
          <Button children='Bookings'/>
          <Button children='Details'/>
          <Button children='points'/>
        {/* <h1>My Bookings</h1>
        <h1>Account Details</h1>
        <h1>Loyalty points</h1> */}
        </div>
        </>
      }
    </div>
  )
}

export default myportal