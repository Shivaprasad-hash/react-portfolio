import {useRef} from "react";
import "./Nav.css";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <nav ref={navRef} className="nav_container">
                <a href="" onClick={showNavbar}>Home</a>
                <a href="#aboutCont" onClick={showNavbar}>About</a>
                <a href="#skillsCont" onClick={showNavbar}>Skills</a>
                <a href="#projectsCont" onClick={showNavbar}>Projects</a>
                <a href="#certifiCont" onClick={showNavbar}>Certifications</a>
                <a href="#contactCont" onClick={showNavbar}>Contact</a>
                <button onClick={showNavbar} className="close_btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </nav>
            <button onClick={showNavbar} className="hamb_btn">
                <i class="fa-solid fa-bars"></i>
            </button>
        </header>
    )
}

export default Navbar;