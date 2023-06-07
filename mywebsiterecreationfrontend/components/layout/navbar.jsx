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


    return (
        <div>
            <nav className="blue-grey darken-3">
                <div className="nav-wrapper">
                    <Link href="/"><img src="/images/logo/my_youtube_gaming_logo_2020_v2.2.png" alt="Picture of the author" className="img-nav-mobile img-nav-desktop" /></Link>
                    <Link href="/" className="brand-logo">&nbsp;DangerousDan996</Link>

                    <ul className="right hide-on-med-and-down">
                        <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "active" : ""}><Link href="/article/category/2">Other</Link></li>
                        <li className={router.asPath == "/resume/1" ? "active" : ""}><Link href="/resume/">Resume</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="center-align blue-grey darken-3 white-text hide-on-large-only">
                <i className="material-icons">home</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="material-icons">movie</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="material-icons">view_module</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="material-icons">receipt</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}