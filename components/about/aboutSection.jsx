/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 26, 2023
    Last Updated: July 4, 2023
    Description: This is the component is for displaying the about me data.
    Notes:
    Resources: 
*/

export default function AboutSection() {
    return (
        <div className="row">
            <div className="col s12 l5">
                <img src={`/images/profile/my_profile_picture_2023.png`} alt="Daniel Cox's Profile Picture" width={250} height={300} />
            </div>

            <div className="col s12 l6 white-text">
                <h2>About Me</h2>
                <p>
                    I graduated from NSCC IT Programming (Class of 2020).
                    For the last 3 years I've been developing a 2.5D fantasy RPG platform game named Vex Monsters,
                    where you save monsters from an evil mysterious villain.
                </p>
                <p>
                    Throughout my experience as a programmer,
                    I have completed several challenging projects for game development (General),
                    and web application backend. These projects taught me a hands-on mindset and approach.
                    I learned how to analyze, study, and apply learning to figure out solutions when working alone or with a team.
                </p>
            </div>
        </div>
    )
}