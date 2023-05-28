/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: May 27, 2023
    Description: This is the page for my resume.
    Notes:
    Resources: 
*/

import { getLocalData } from "../../components/localData/localData"
import { useEffect } from "react";

export default function ResumeDetailPage({ resume }) {
    useEffect(() => {
        document.title = `DangerousDan996 | Resume`;
    }, []);

    return (
        <div key={resume.resume_id} className="container white-text">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <h3>Resume</h3>
                        </div>
                        <div className="col s12 ">
                            {resume.images.map((image, index) => {
                                return (
                                    <div>
                                        <img src={image.link} alt={image.name} width={800} className="responsive-img" />
                                        <br />
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                        {resume.resources.map((resource, index) => {
                            return (
                                <div key={resource.resource_id} className="col s12">
                                    <h5><a className="blue-text" target="_blank" href={resource.link}>{resource.description}</a></h5>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const localData = await getLocalData('resumeData.json')

    const thePaths = localData[0].resumes.map(resume => {
        return { params: { id: resume.resume_id.toString() } }
    })

    return {
        paths: thePaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const localData = await getLocalData('resumeData.json')
    const resume = localData[0].resumes.filter(resume => resume.resume_id.toString() === context.params.id)

    return {
        props: {
            resume: resume[0]
        }
    }
}