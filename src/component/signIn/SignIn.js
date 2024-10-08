import React, { useState } from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import FormInput from '../formInput/FormInput';
import './signIn.scss'
import Button from '../button/Button';


const defaultFormField = {
    email: '',
    password: '',
}

const SignIn = () => {

    const signInWithGoogle = async () =>{
        const { user } = await signInWithGooglePopup()
         await createUserDocumentFromAuth(user)
      }

   const [formFields, setFormFields] = useState(defaultFormField);
   const { email, password } = formFields;

   const resetFormField = () =>{
     setFormFields(defaultFormField);
   }

   const handleSubmit = async (event) =>{
    event.preventDefault()
     try {
       const response = await signInAuthUserWithEmailAndPassword(email, password)
       console.log(response);
       resetFormField()
     } catch (error) {
        if(error.code === 'auth/invalid-credential'){
            alert('Invalid Emaill or Password');
        }else{
            console.log(error);
        }
     }
   }

   const handleChange = (event) =>{
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value })
   }

  return (
    <div className='sign-in-container'>
        <h2>Already have an account yet?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type='email' name='email' onChange={handleChange} value={email} required />
            <FormInput label="Password" type='password' name='password' onChange={handleChange} value={password} required />
            <div className='buttons-container'>
            <Button type='submit'>Sign IN</Button>
            <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignIn