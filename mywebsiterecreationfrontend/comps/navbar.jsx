import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()

    return (

        <nav className="header-nav">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/article/category/2">Monstrous Ent Game Demos</Link>
                </li>
                <li>
                    <Link href="/article/category/3">Website Application Projects</Link>
                </li>
                <li>
                    <Link href="/article/category/4">Resume</Link>
                </li>
                <li>
                    <Link href="/article/category/5">Other</Link>
                </li>
            </ul>
        </nav>

    )
}