import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer class="page-footer blue-grey darken-3">
            <div class="container">
                <div class="row">
                    <div class="col l2 m3 s12">
                        <h5 class="white-text">Contact Me</h5>
                        <p class="grey-text text-lighten-4">You can contact me by via, email, phone or Linkedin.</p>
                        <ul>
                            <li><Link className="grey-text text-lighten-4" href="#">danielcox996@gmail.com</Link></li>
                            <li><Link className="grey-text text-lighten-4" href="#">902-818-8129</Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" class="linkTag" href="https://www.linkedin.com/in/daniel-cox-b0320115b/"><Image src="/linkedinLogo.png" width={20} height={20} alt="Linkedin" /></Link></li>
                        </ul>
                    </div>
                    <div class="col l2 m3 s12">
                        <h5 class="white-text">Resources</h5>
                        <ul>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://nextjs.org/">Next JS React Framework</Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://materializecss.com/">Materialize CSS Framework</Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://www.djangoproject.com/">Django Web Framework </Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://www.django-rest-framework.org/">Django REST Framework</Link></li>
                        </ul>
                    </div>
                    <div className="col l2 m3 s12">
                        <h5 className="white-text">GitHub Repos</h5>
                        <ul>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Frontend">Front End</Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://github.com/DangerousDaniel/My-Portfolio-Website-Recreation-Backend">Back End</Link></li>
                            <li><Link className="grey-text text-lighten-4" target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Work-Examples">Work Examples</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        &copy; 2013 - 2023 DangerousDan996 | All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}