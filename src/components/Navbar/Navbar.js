import logo from '../../logo.svg';
import { Link } from "react-router-dom";
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
                <Link to="/"><img src= {logo} className="main-logo" alt="logo" /></Link>
                <div className="container-navigation">
                    <nav className='navigation'>
                        <ul className='links'>
                            <li className='link'>
                                <Link to="/category/aromatizantes">AROMATIZANTES</Link>
                            </li>
                            <li className='link'>
                                <Link to="/category/humectantes">HUMECTANTES</Link>
                            </li>
                            <li className='link'>
                                <Link to="/category/artesanales">ARTESANALES</Link>
                            </li>
                        </ul>
                    </nav>
                    <CartWidget/> 
                </div>
            </div>     
        </header>
    )
}