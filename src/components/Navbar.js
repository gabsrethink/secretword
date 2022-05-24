import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../images/logoHeader.png'



const Navbar = () => {


    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to='/' className={styles.brand}>
                    <div className={styles.logoHeader}>
                        <img src={logo} alt="" />
                    </div>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar