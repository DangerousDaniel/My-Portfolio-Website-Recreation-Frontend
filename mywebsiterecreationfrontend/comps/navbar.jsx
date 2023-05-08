import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()

    return (
        <nav className="blue-grey darken-3">
            <div className="nav-wrapper">
                <div className="row">
                    <div className="col"><Link href="/"><Image src="/my_youTube_gaming_logo_2020_v2.2.png" alt="Picture of the author" width={63} height={63} /></Link></div>
                    <div className="col"><Link href="/" className="brand-logo">DangerousDan996</Link></div>
                    <ul className="right hide-on-med-and-down">
                        <li className={router.asPath == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.asPath == "/article/category/1" ? "active" : ""}><Link href="/article/category/1">Monstrous Ent Game Demos</Link></li>
                        <li className={router.asPath == "/article/category/2" ? "active" : ""}  ><Link href="/article/category/2">Website Application Projects</Link></li>
                        <li className={router.asPath == "/article/category/3" ? "active" : ""}><Link href="/article/category/3">Resume</Link></li>
                        <li className={router.asPath == "/article/category/4" ? "active" : ""}><Link href="/article/category/4">Other</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}