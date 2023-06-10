/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 27, 2023
    Description: This is the component for the navbar.
    Notes:
    Resources: 
*/

import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react";

export default function NavBar() {
    const router = useRouter()

    const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuIsActive(!mobileMenuIsActive)
    }

    return (
        <div>
            <nav className="blue-grey darken-3">
                <div className="nav-wrapper">
                    <Link href="/"><img src="/images/logo/my_youtube_gaming_logo_2020_v2.2.png" alt="Picture of the author" className="logo-nav-mobile logo-nav-desktop" /></Link>
                    <Link href="/" className="brand-logo">&nbsp;DangerousDan996</Link>
                    <a onClick={toggleMobileMenu} className="sidenav-trigger right waves-effect waves-light btn blue-grey darken-2"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "active" : ""}><Link href="/article/category/2">Other</Link></li>
                        <li className={router.asPath == "/resume/" ? "active" : ""}><Link href="/resume/">Resume</Link></li>
                    </ul>
                </div>
            </nav>
            {mobileMenuIsActive &&
                <div className="right blue-grey darken-3 nav-sidebar-moblie hide-on-large-only" onClick={toggleMobileMenu}>
                    <ul>
                        <li className={router.asPath == "/" ? "nav-item-moblie active-nav-item-moblie" : "nav-item-moblie"} ><Link className="white-text" href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "nav-item-moblie active-nav-item-moblie" : "nav-item-moblie"}><Link className="white-text" href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "nav-item-moblie active-nav-item-moblie" : "nav-item-moblie"}><Link className="white-text" href="/article/category/2">Other</Link></li>
                        <li className={router.asPath == "/resume/" ? "nav-item-moblie active-nav-item-moblie" : "nav-item-moblie"}><Link className="white-text" href="/resume/">Resume</Link></li>
                    </ul>
                </div>
            }
        </div>
    )
}