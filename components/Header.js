import Link from './Link'
import img from '../img/logo.webp'

/**
 *                 
 */

function navProps() {
    return [
        { href: '/', text: 'Home', align: 'left', isActive: true },
        { href: '/about', text: 'About', align: 'right', isActive: false },
        { href: '/inventory', text: 'Inventory', align: 'right', isActive: false },
        { href: '/contact', text: 'Contact Us', align: 'right', isActive: false },
    ]
}
const Header = () => (
    <div>
        <ul className="topnav">
            {navProps().map((navProp) => (
            <li key={`${navProp.text}-li`} className={navProp.align == 'left' ? 'left' : null}>               
                <Link
                    key={navProp.text}
                    activeClassName='active'
                    href={navProp.href}>                   
                    <a className={'nav-link' + navProp.isActive ? ' home-link' : ''}>
                        {navProp.text}
                    </a>
                </Link>
            </li>
            ))}
        </ul>
        <style jsx>{
            `body {
            margin: 0;
        }
        .active {
            background-color: #0000FF;
        }
        .nav-link {
            text-decoration: none;
            padding: 10px;
            display: grid;
        }
        .img {
            max-width: 100%;
            max-height: 100vh;
            margin: auto;
        }
        ul.topnav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        ul.topnav li {
            float: right;
        }     
        ul.topnav li a {
            display: grid;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-family: "Menlo";
        }    
        ul.topnav li a:hover:not(.active) {
            background-color: #111;
        }
        ul.topnav li.left {
            float: left;
        }
        @media screen and (max-width: 600px) {
            ul.topnav li.left, 
            ul.topnav li {float: none;}           
        }`}
        </style>
    </div>
)

export default Header;