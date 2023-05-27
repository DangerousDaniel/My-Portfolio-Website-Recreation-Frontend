/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 8, 2023
    Description: This is the components is for navbar.
    Notes:
    Resources: 
*/

import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()

    return (
        <nav className="blue-grey darken-3">
            <div className="nav-wrapper">
                <div className="row">
                    <div className="col"><Link href="/"><img src="/my_youTube_gaming_logo_2020_v2.2.png" alt="Picture of the author" width={63} height={63} /></Link></div>
                    <div className="col"><Link href="/" className="brand-logo">DangerousDan996 | Daniel Cox</Link></div>
                    <ul className="right hide-on-med-and-down">
                        <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "active" : ""}><Link href="/article/category/2">Other</Link></li>
                        <li className={router.asPath == "#" ? "active" : ""}><Link href="#">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}