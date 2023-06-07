/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: June 7, 2023
    Description: This is the component for displaying footer resource details.
    Notes:
    Resources: 
*/

export default function FooterResourceSection() {
    return (
        <div>
            <div className="col l4 s12">
                <h5>Framework Resources</h5>
                <ul>
                    <li>
                        <a target="_blank" className="white-text" href="https://nextjs.org/">Next JS React Framework</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://materializecss.com/">Materialize CSS Framework</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://www.djangoproject.com/">Django Web Framework</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://www.django-rest-framework.org/">Django REST Framework</a>
                    </li>
                </ul>
            </div>

            <div className="col l4 s12">
                <h5>GitHub Repos Resources</h5>
                <ul>
                    <li>
                        <a target="_blank" className="white-text" href="https://github.com/DangerousDaniel/My-Website-Recreation-Frontend">My Portfolio Website Recreation Frontend</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://github.com/DangerousDaniel/My-Portfolio-Website-Recreation-Backend">My Portfolio Website Recreation Backend</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://github.com/DangerousDaniel/My-Website-Recreation-Work-Examples">My Portfolio Website Recreation Work Examples</a>
                    </li>

                    <li>
                        <a target="_blank" className="white-text" href="https://github.com/DangerousDaniel/dangerousdaniel.github.io">My Original Portfolio Website</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}