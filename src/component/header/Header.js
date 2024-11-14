import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo} from '../../image/crown.svg'
import { UserContext } from '../../context/context'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../cart-icon/cartIcon'
import CartDropdown from '../cart-dropdown/cartDropdown'
import { CartContext } from '../../context/CartContext'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './header.style'

const Header = () =>{

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  // console.log(currentUser)

  // const signOutHandler = async () =>{
  //    await signOutUser();
  //    setCurrentUser(null);
  // }

  return (
    // fragment or <>
    <Fragment> 
        <NavigationContainer>
            <LogoContainer to='/' >
               <CrownLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>Shop</NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                  ):(
                    <NavLink to='/auth'>Sign In</NavLink>
                  )
                }
                <CartIcon />
            </NavLinks>
            { isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Header