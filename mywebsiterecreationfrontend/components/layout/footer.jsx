/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 8, 2023
    Description: This is the components is for footer.
    Notes:
    Resources: 
*/

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l2 m3 s12">
                        <h5 >Contact Me</h5>
                        <p>You can contact me by via, email, phone or Linkedin.</p>
                        <ul>
                            <li><a className="white-text"  href="#">danielcox996@gmail.com</a></li>
                            <li><a className="white-text"  href="#">902-818-8129</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/daniel-cox-b0320115b/"><img src="/linkedinLogo.png" width={20} height={20} alt="Linkedin" /></a></li>
                        </ul>
                    </div>
                    <div className="col l2 m3 s12">
                        <h5>Resources</h5>
                        <ul>
                            <li><a className="white-text"  target="_blank" href="https://nextjs.org/">Next JS React Framework</a></li>
                            <li><a className="white-text" target="_blank" href="https://materializecss.com/">Materialize CSS Framework</a></li>
                            <li><a className="white-text" target="_blank" href="https://www.djangoproject.com/">Django Web Framework </a></li>
                            <li><a className="white-text" target="_blank" href="https://www.django-rest-framework.org/">Django REST Framework</a></li>
                        </ul>
                    </div>
                    <div className="col l2 m3 s12">
                        <h5 >GitHub Repos</h5>
                        <ul>
                            <li><a className="white-text" target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Frontend">Front End</a></li>
                            <li><a className="white-text" target="_blank" href="https://github.com/DangerousDaniel/My-Portfolio-Website-Recreation-Backend">Back End</a></li>
                            <li><a className="white-text"  target="_blank" href="https://github.com/DangerousDaniel/My-Website-Recreation-Work-Examples">Work Examples</a></li>
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