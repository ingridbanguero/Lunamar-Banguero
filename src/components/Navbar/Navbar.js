import logo from '../../logo.svg';
import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.css'


export const Navbar = () => {
    return(
        <header className="navbar">
            <div className="container">
                <input type="checkbox" id="btn-menu"/>
                <label className="menu-icon" htmlFor="btn-menu">
                    <span className="nav-icon"></span>
                </label>
                <img src= {logo} className="main-logo" alt="logo" />
                <div className="container-navigation">
                    <nav className='navigation'>
                        <ul className='links'>
                            <li className='link'><a href="/">INICIO</a></li>
                            <li className='link'><a href="/">CATEGORÍAS</a></li>
                            <li className='link'><a href="/">PRODUCTOS</a></li>
                            <li className='link'><a href="/">REGALOS</a></li>
                            <li className='link'><a href="/">DESCUENTOS</a></li>
                        </ul>
                    </nav>
                    <CartWidget/> 
                </div>
            </div>     
        </header>
    )
}