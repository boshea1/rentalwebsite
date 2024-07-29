import React, {  useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";
import Nav from '@/app/components/Nav';
import '../app/globals.css'

const SignIn = () => {
    const [user, loading] = useAuthState(auth)
    const provider = new GoogleAuthProvider();
    const router = useRouter()
    
    // const navigate = useNavigate()
    const googleSignIn = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            console.log(result.user)
            router.push('/myportal')
            // navigate('/myportal')
        } catch(error){
            console.log(error)
        }
      };
      

      useEffect(() => {
        if (user) {
          console.log('it worked')
            
        } else {
          console.log("login");
        }})

  return (
    <div className="shadow-xl p-10 text-gray-700 rounded-lg">
      <Nav></Nav>
    <h2 className="text-3xl mt-10 font-medium">Join/Sign in</h2>
    <div className="py-4">
      <div className="flex flex-col gap-4">
        <button
          onClick={googleSignIn}
          className="text-white bg-gray-700 p-4 font-medium rounded-lg flex align-middle gap-2 "
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
  )
}

export default SignIn