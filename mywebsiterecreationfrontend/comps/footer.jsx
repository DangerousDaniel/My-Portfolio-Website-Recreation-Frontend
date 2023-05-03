import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l2 m3 s12">
                        <h5 >Contact Me</h5>
                        <p>You can contact me by via, email, phone or Linkedin.</p>
                        <ul>
                            <li><Link className="white-text"  href="#">danielcox996@gmail.com</Link></li>
                            <li><Link className="white-text"  href="#">902-818-8129</Link></li>
                            <li><Link target="_blank" href="https://www.linkedin.com/in/daniel-cox-b0320115b/"><Image src="/linkedinLogo.png" width={20} height={20} alt="Linkedin" /></Link></li>
                        </ul>
                    </div>
                    <div className="col l2 m3 s12">
                        <h5>Resources</h5>
                        <ul>
                            <li><Link className="white-text"  target="_blank" href="https://nextjs.org/">Next JS React Framework</Link></li>
                            <li><Link className="white-text" target="_blank" href="https://materializecss.com/">Materialize CSS Framework</Link></li>
                            <li><Link className="white-text" target="_blank" href="https://www.djangoproject.com/">Django Web Framework </Link></li>
                            <li><Link className="white-text" target="_blank" href="https://www.django-rest-framework.org/">Django REST Framework</Link></li>
                        </ul>
                    </div>
                    <div className="col l2 m3 s12">
                        <h5 >GitHub Repos</h5>
                        <ul>
                            <li><Link className="white-text" target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Frontend">Front End</Link></li>
                            <li><Link className="white-text" target="_blank" href="https://github.com/DangerousDaniel/My-Portfolio-Website-Recreation-Backend">Back End</Link></li>
                            <li><Link className="white-text"  target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Work-Examples">Work Examples</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2013 - 2023 DangerousDan996 | All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}