import Link from './Link'
import img from '../img/strickland-home.jpg'


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
                        activeClassName='active'
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
            padding: 14px 16px;
            font-family: "Menlo";
        }
        .home-img {
            background-image: url(${img});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            padding: 21px 23px;
            display: grid;
            height: 100%;
            width: 115%;
        }
        ul.topnav {
            position: fixed;
            top: 0;
            width: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        ul.topnav li {
            float: right;
        }       
        ul.topnav li a:hover:not(.active) {
            background-color: #111;
        }
        ul.topnav li.left {
            float: left;
        }
        @media screen and (max-width: 600px) {
            ul.topnav li.left, ul.topnav li {
                float: none;
            }
            ul.topnav {
                position: relative;
            }
            .home-img {
                margin-left: -13%;
            }   
        }`}
        </style>
    </div>
)

export default Header;