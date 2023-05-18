import logoImg from './../../img/icons/logo.svg'
import './header.css';


function Header () {
    return (

       <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo"/>
                        <span>Fashion</span>
                    </div>
                    <div className="header__nav">NAV</div>
                </div>
            </div>
       </div>

    )
}

export default Header;