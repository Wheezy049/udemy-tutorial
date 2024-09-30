import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const Signin = () =>{

  const logUserIn = async () =>{
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
    // console.log(response)
  }

  return (
    <div>
    <h1>The is the sign in page</h1>
    <button onClick={logUserIn}>Sign in with Google</button>
    </div>
  )
}

export default Signin