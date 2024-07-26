import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav>
            <ul className="navBar">
                <li>
                    <Link to="/" className={pathname === "/" ? "currentPageNavItem" : "navItem"}>Home</Link>
                    <Link to="/projects" className={pathname === "/projects" ? "currentPageNavItem" : "navItem"}>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}