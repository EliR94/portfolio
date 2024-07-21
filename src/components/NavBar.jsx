import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname)
    return (
        <nav>
            <ul className="navBar">
                <li>
                    <Link to="/" className={pathname === "/" ? "currentPageNavItem" : "navItem"}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}