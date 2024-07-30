import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import { usePathname } from "next/navigation";
import { signOut } from 'firebase/auth'
import { useRouter } from "next/navigation";

// import dynamic from 'next/dynamic'
 
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })




const Nav =() => {
  // const router = useRouter()
  const path = usePathname()
  const router = useRouter();

    const [user, loading] = useAuthState(auth)

  
  return (<>

    <div dir='rtl'>
    <div className=' flex mt-4 mr-5 right-0 start-0 font-poppins'>
        <div className='ml-4 top-0'>
        {(user && path != '/myportal') && <a className='ml-10 mt-4 mr-4' href='myportal'>Manage bookings 
        <Image 
              src="/book.svg"
              alt="Book Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
              /> 
        </a> }
        </div>
        <div className='mr-4'>
        {user ? <a className='ml-10 mt-4' href='/' onClick={()=>{signOut(auth); router.push('/')} }> Sign Out
        <Image
              src="/person.svg"
              alt="Person Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
              />
              </a> : path != '/signin' ?
              <a className='ml-10 mt-4' href='signin'>Log in with Google
        <Image
              src="/person.svg"
              alt="Person Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
              />
        </a> : null}
            </div>

            <div className='tire tread mr-auto ml-4'>
        <a className=' ml-20' href='/'>
        <Image src="/carrentallogo.png"
              width={200}
              height={200}/>
              </a>
              </div>
        </div>
    </div>
    {path == '/' ? <div className={'flex justify-center m-10 text-white'}>
        <Button onClick={()=> window.scrollTo({top:1600, behavior:'smooth'})}  children='Rent A Car'/>
        <Button onClick={()=> window.scrollTo({top:2000, behavior:'smooth'})}  children='Locations'/>
        <Button onClick={()=> window.scrollTo({top:3000, behavior:'smooth'})}  children='FAQs'/>
    </div> : (path == '/myportal' && user) ? <div className={'flex justify-center m-10 text-white'}>
        <Button onClick={()=> window.scrollTo({top:2000, behavior:'smooth'})}  children='Bookings'/>
        <Button onClick={()=> window.scrollTo({top:2300, behavior:'smooth'})}  children='Points'/>
        <Button onClick={()=> window.scrollTo({top:3000, behavior:'smooth'})}  children='Account Details'/>
    </div> : ''}
    </>
  )
}

export default Nav