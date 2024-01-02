/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 26, 2023
    Last Updated: July 5, 2023
    Description: This is the component is for displaying the about me data.
    Notes:
    Resources: 
*/

export default function AboutSection() {
    return (
        <div className="row">
            <div className="col s12 l5">
                <img src={`/images/profile/my_profile_picture_2024_1.jpg`} alt="Daniel Cox's Profile Picture" width={250} height={300} />
            </div>

            <div className="col s12 l6 white-text">
                <h2>About Me</h2>
                <p>
                    I graduated from NSCC IT Programming (Class of 2020). 
                    I build 2D/3D games for game jams and personal projects. 
                    I also build 2D/3D games with my indie game team named Monstrous Entertainment. 
                    We are currently working on a 2D platformer named Cat Chef.
                </p>
                <p>
                    Throughout my experience as a Programmer/Team Leader,
                    I have completed several challenging projects for game development, and full stack web application.
                    These projects taught me a hands-on mindset and approach.
                    I learned how to analyze, study, and apply learning to figure out solutions when working alone or with a team.
                </p>
            </div>
        </div>
    )
}