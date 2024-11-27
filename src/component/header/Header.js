import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo} from '../../image/crown.svg'
// import { UserContext } from '../../context/context'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../cart-icon/cartIcon'
import CartDropdown from '../cart-dropdown/cartDropdown'
// import { CartContext } from '../../context/CartContext'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './header.style'
import { selectCurrentUser } from '../../store/user/userSelector'
import { selectIsCartOpen } from '../../store/cart/cartSelector'

const Header = () =>{

  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext)
  const isCartOpen = useSelector(selectIsCartOpen)
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