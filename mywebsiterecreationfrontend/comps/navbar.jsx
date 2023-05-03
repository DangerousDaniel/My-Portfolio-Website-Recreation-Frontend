import Link from "next/link"
import Image from 'next/image'
import { useState, useEffect } from "react"

export default function NavBar() {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/category/all.json', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        },)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setCategories(data)

            })
    }, []);


    return (
        <nav className="blue-grey darken-3">
            <div className="nav-wrapper">
                <div className="row">
                    <div className="col"> <Link href="/"><Image src="/my_youTube_gaming_logo_2020_v2.2.png" alt="Picture of the author" width={63} height={63} /></Link></div>
                    <div className="col"><Link href="/" className="brand-logo">DangerousDan996</Link></div>
                    <ul className="right hide-on-med-and-down">
                        <li className="active"><Link href="/">Home</Link></li>

                        {categories && categories.map((category, index) => {
                            if (index >= 2) {
                                return (<li ><Link href={`/article/category/${category.category_id}`}>{category.name}</Link></li>)
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}