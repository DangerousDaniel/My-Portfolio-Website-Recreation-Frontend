import Link from "next/link"
import Image from 'next/image'

export default function NavBar() {
    return (
        <nav className="blue-grey darken-3">
            <div className="nav-wrapper">
                <div class="row">
                    <div class="col"> <Link href="/"><Image src="/my_youTube_gaming_logo_2020_v2.2.png" alt="Picture of the author" width={63} height={63} /></Link></div>
                    <div class="col"><Link href="/" className="brand-logo">DangerousDan996</Link></div>
                    <ul className="right hide-on-med-and-down">
                        <li className="active"><Link href="/">Home</Link></li>
                        <li><Link href="/article/category/2">Monstrous Ent Game Demos</Link></li>
                        <li><Link href="/article/category/3">Website Application Projects</Link></li>
                        <li><Link href="/article/category/4">Resume</Link></li>
                        <li><Link href="/article/category/5">Other</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}