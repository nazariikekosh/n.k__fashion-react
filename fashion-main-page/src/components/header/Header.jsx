import logoImg from './../../img/icons/logo.svg'
import './header.css';


function Header () {
    return (

       <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <a href="#!">
                        <img src={logoImg} alt="Logo"/>
                        <span>Fashion</span>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li><a href="#!" className='header__nav-btn'>SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
       </div>

    )
}

export default Header;