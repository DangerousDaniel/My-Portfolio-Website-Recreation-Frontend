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
        <nav className="blue-grey darken-3">
       
            <div className="nav-wrapper">
                <Link href="/"><img src="/images/logo/my_youtube_gaming_logo_2020_v2.2.png" alt="Picture of the author" className="img-nav-mobile img-nav-desktop" /></Link>
                <Link href="/" className="brand-logo">&nbsp;DangerousDan996</Link>
                <a onClick={toggleMobileMenu} className="sidenav-trigger right waves-effect waves-light btn blue-grey darken-2"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                    <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                    <li className={router.asPath == "/article/category/2" ? "active" : ""}><Link href="/article/category/2">Other Articles</Link></li>
                    <li className={router.asPath == "/resume/1" ? "active" : ""}><Link href="/resume/1">My Resume</Link></li>
                </ul>

                {mobileMenuIsActive &&
                    <ul className="right blue-grey darken-3 nav-sidebar">
                        <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "active" : ""}><Link href="/article/category/2">Other Articles</Link></li>
                        <li className={router.asPath == "/resume/1" ? "active" : ""}><Link href="/resume/1">My Resume</Link></li>
                    </ul>
                }
            </div>




        </nav>
    )
}