/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: June 7, 2023
    Description: This is the component for displaying footer info.
    Notes:
    Resources: 
*/

export default function FooterInfoSection() {
    return (
        <div>
            <div className="col l4 s12">
                <h5>Contact Me</h5>
                <p>
                    You can contact me via email, phone or Linkedin.
                </p>
                <ul>
                    <li>
                        <a target="_blank" className="white-text" href="#">
                            <span>&nbsp;</span>
                            danielcox996@gmail.com
                        </a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="#">
                            <span>&nbsp;</span>
                            902-818-8129
                        </a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://www.linkedin.com/in/daniel-cox-b0320115b/">
                            <img src={`/images/logo/linkedin_logo.png`} width={20} height={20} alt="Linkedin Logo" />
                            <span>&nbsp;</span>
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col l4 s12">
                <h5>About The Website</h5>
                <p>
                    This website is a collection of portfolio projects throughout my 3 years of experience as a game developer,
                    and web application full stack developer. It is a recreation of my original portfolio website that was done in
                    HTML5 and CSS3 with Bootstrap 4. The website frontend is built in Next JS  React Framework, and Materialize CSS Framework.
                    Its backend is built in  Django Web Framework, and Django REST Framework.
                </p>
            </div>
        </div>
    )
}