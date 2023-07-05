/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: July 5, 2023
    Description: This is the page for my resume.
    Notes:
    Resources: 
*/

import { useEffect } from "react";

export default function ResumeDetailPage({ resume }) {
    useEffect(() => {
        document.title = `DangerousDan996 | Resume`;
    }, []);

    return (
        <div className="container white-text">
            <div className="row">
                <div className="col s12">
                        <div className="col s12">
                            <h3>Resume</h3>
                        </div>

                        <div className="col s12 ">
                            <img src="/images/resume/daniel_cox_it_resume_page_1.png" alt="Daniel Cox IT Resume Page 1" width={800} className="responsive-img" />
                            <br />
                            <br />
                        </div>

                        <div className="col s12 ">
                            <img src="/images/resume/daniel_cox_it_resume_page_2.png" alt="Daniel Cox IT Resume Page 2" width={800} className="responsive-img" />
                            <br />
                            <br />
                        </div>

                        <div className="col s12 ">
                            <img src="/images/resume/daniel_cox_it_resume_page_3.png" alt="Daniel Cox IT Resume Page 3" width={800} className="responsive-img" />
                            <br />
                            <br />
                        </div>

                        <div className="col s12">
                            <h5><a className="blue-text" target="_blank" href="https://github.com/DangerousDaniel/My-Portfolio-Website-Recreation-Frontend/blob/main/public/pdfs/daniel_cox_it_resume.pdf">PDF HERE</a></h5>
                        </div>
                </div>
            </div>
        </div>
    )
}