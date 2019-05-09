import Link from './Link'
import img from '../media/strickland-home.jpg'


function navProps() {
    return [
        { href: '/', text: 'Home', align: 'left'},
        { href: '/about', text: 'About', align: 'right'},
        { href: '/inventory', text: 'Inventory', align: 'right'},
        { href: '/contact', text: 'Contact Us', align: 'right'},
    ]
}
const Header = () => (
    <div>
        <ul className="topnav">
            {navProps().map((navProp) => (
            <li key={`${navProp.text}-li`} className={navProp.align == 'left' ? 'left' : null}> 
                <div>              
                    <Link
                        key={navProp.text}
                        activeClassName={navProp.align == 'left' ? null : 'active'}
                        href={navProp.href}>                   
                        <a className={navProp.align == 'left' ? 'home-img' : 'nav-link'}>
                            {navProp.text == 'Home' ?  null : navProp.text}
                        </a>
                    </Link>
                </div>
            </li>
            ))}
        </ul>
        <style jsx>{`
        .active {
            background-color: #0000FF;
        }
        .nav-link {
            text-decoration: none;
            display: grid;
            color: white;
            text-align: center;
            padding: 17px 19px;
            font-family: "Arvo";
            text-transform: uppercase;
        }
        .home-img {
            background-image: url(${img});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            padding: 3.1vh 3.1vw;
            display: grid;
            height: auto;
            width: 100%;
        }
        ul.topnav {
            position: fixed;
            top: 0;
            z-index: 500;
            width: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
        }
        ul.topnav li {
            float: right;
            font-size: 1.2vw;
            cursor: pointer;
        }    
        ul.topnav li a:hover:not(.active) {
            background-color: #111;
        }
        ul.topnav li.left {
            float: left;
        }
        @media screen and (max-width: 900px) {
            ul.topnav li {
                font-size: 2.2vw;
        }
        @media screen and (max-width: 600px) {
            ul.topnav li.left, ul.topnav li {
                float: none;
                font-size: 2.5vw;
            }
            ul.topnav {
                position: relative;
            }
        }`}
        </style>
    </div>
)

export default Header;