import './NavBar.scss';
import Logo from '../../assets/logo/InStock-Logo.svg';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar__nav">
                <NavLink to={'/warehouses'}>
                <img className="navbar__logo"
                src={Logo}
                alt="Company logo"
                />
                </NavLink>
                <div className="navbar__nav--links">
                    <NavLink to={'/warehouses'}
                    className="navbar__navlink"
                    activeClassName='navbar__navlink--active'
                    >
                        Warehouses
                    </NavLink>
                    <NavLink to={'/inventory'}
                    className="navbar__navlink"
                    activeClassName='navbar__navlink--active'
                    >
                        Inventory
                    </NavLink>
                </div>
            </div>
        </nav>
        </>
    )
}