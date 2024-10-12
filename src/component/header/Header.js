import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo} from '../../image/crown.svg'
import './header.scss'
import { UserContext } from '../../context/context'
import { signOutUser } from '../../utils/firebase/firebase'

const Header = () =>{

  const { currentUser } = useContext(UserContext)
  // console.log(currentUser)

  // const signOutHandler = async () =>{
  //    await signOutUser();
  //    setCurrentUser(null);
  // }

  return (
    // fragment or <>
    <Fragment> 
        <div className='navigation'>
            <Link to='/' className='logo-container'>
               <CrownLogo className="logo"/>
            </Link>
            <div className='nav-links-container'>
                <Link to='/shop' className='nav-link'>Shop</Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                  ):(
                    <Link to='/auth' className='nav-link'>Sign In</Link>
                  )
                }
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Header