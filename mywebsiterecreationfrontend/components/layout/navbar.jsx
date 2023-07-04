/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 4, 2023
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
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Web Application Projects</Link></li>
                        <li className={router.asPath == "/article/category/3" ? "active" : ""}><Link href="/article/category/2">Other Articles</Link></li>
                        <li className={router.asPath == "/resume/" ? "active" : ""}><Link href="/resume/">Resume</Link></li>
                    </ul>
                </div>
            </nav>
            {mobileMenuIsActive &&
                <div id="slide-out" class="nav-sidebar-mobile blue-grey darken-3 hide-on-large-only" onClick={toggleMobileMenu}>
                    <a onClick={toggleMobileMenu} className="right waves-effect waves-light btn blue-grey darken-2"><i className="material-icons">close</i></a>
                    <ul>
                        <li className="nav-sidebar-user-view-mobile">
                                <a href="#user"><img class="circle" src="/images/logo/my_youtube_gaming_logo_2020_v2.2.png" width="20%" /></a>
                                <a href="#name"><span class="white-text name">DangerousDan996</span></a>
                        </li>
                        <div class="divider"></div>
                    </ul>
                    <ul>
                        <li className={router.asPath == "/" ? "nav-item-mobile active-nav-item-mobile" : "nav-item-mobile"} ><Link className="white-text" href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "nav-item-mobile active-nav-item-mobile" : "nav-item-mobile"}><Link className="white-text" href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "nav-item-mobile active-nav-item-mobile" : "nav-item-mobile"}><Link className="white-text" href="/article/category/2">Other</Link></li>
                        <li className={router.asPath == "/resume/" ? "nav-item-mobile active-nav-item-mobile" : "nav-item-mobile"}><Link className="white-text" href="/resume/">Resume</Link></li>
                    </ul>
                </div>
            }
        </div>
    )
}