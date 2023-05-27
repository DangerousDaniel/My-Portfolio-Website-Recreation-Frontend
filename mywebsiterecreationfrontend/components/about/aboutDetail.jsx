/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 26, 2023
    Last Updated: May 26, 2023
    Description: This is the component is for displaying the about me data.
    Notes:
    Resources: 
*/


export default function AboutDetail({ aboutData }) {
    return (
        <div key={aboutData.about_me_id} className="row">
            {aboutData.images.map((image, index) => {
                return (
                    <div key={image.image_id} className="col s12 l3"><img src={`${image.filePath}`} alt={`${image.name}`} width={250} height={300} /></div>
                )
            })}

            <div className="col s12 l6 white-text">
                <h2>About Me</h2>
                {aboutData.paragraphs.map((paragraph, index) => {
                    return (
                        <p key={paragraph.paragraph_id}>
                            {paragraph.description}
                        </p>
                    )
                })}
            </div>

        </div>
    )
}