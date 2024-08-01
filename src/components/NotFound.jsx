import NavBar from "./NavBar";
import Footer from "./Footer";

export default function NotFound() {
    return (
        <>
            <NavBar />
            <p className="pageNotFound">Page not found, please select another page</p>
            <Footer />
        </>
    )
}