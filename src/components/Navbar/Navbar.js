import logo from '../../logo.svg';
import './Navbar.css'


export const Navbar = () => {
    return(
        <header className="navbar">
            <div>
                <input type="checkbox" id="btn-menu"/>
                <label className="menu-icon" htmlFor="btn-menu">
                    <span className="nav-icon"></span>
                </label>
                <img src= {logo} className="main-logo" alt="logo" />
                <nav className='navigation'>
                <ul className='links'>
                    <li className='link'><a href="/">INICIO</a></li>
                    <li className='link'><a href="/">CATEGORÍAS</a></li>
                    <li className='link'><a href="/">PRODUCTOS</a></li>
                    <li className='link'><a href="/">REGALOS</a></li>
                    <li className='link'><a href="/">DESCUENTOS</a></li>
                </ul>
                </nav>
            </div>
             
        </header>
    )
}