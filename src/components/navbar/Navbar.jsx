import './navbar.css';
import cart from '../../images/icon-cart.svg';
import profile from '../../images/image-avatar.png';
import Cart from '../../cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import menuIcon from '../../images/icon-menu.svg';
import closeIcon from '../../images/icon-close.svg';

const Navbar = () => { 

  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const count = useSelector(state => state.cart.count);

  return (
    <header className='navbar'>
        <div className="nav">
            <div className='left'>
                <img src={menuIcon} alt="" className='menu-icon' onClick={() => setShowNav(true)} />
                <a href="#" className='brand'>sneakers</a>
                <div className={`menu ${showNav ? 'active-nav' : ''}`}>
                    <div className="wrapper">
                        <img src={closeIcon} onClick={() => setShowNav(false)} />
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className='cart-container'>
                    <img onClick={() => setShow(show => (!show))} src={cart} className='cartIcon' />
                    { count > 0 && <span className='cart-count'>{count}</span>}
                    {show && <Cart />}
                </div>
                <img src={profile} alt="" className='profile' />
            </div>
        </div>
    </header>
  )
}

export default Navbar