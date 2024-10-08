import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo} from '../../image/crown.svg'
import './header.scss'

const Header = () =>{
  return (
    // fragment or <>
    <Fragment> 
        <div className='navigation'>
            <Link to='/' className='logo-container'>
               <CrownLogo className="logo"/>
            </Link>
            <div className='nav-links-container'>
                <Link to='/shop' className='nav-link'>Shop</Link>
                <Link to='/auth' className='nav-link'>Sign In</Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Header