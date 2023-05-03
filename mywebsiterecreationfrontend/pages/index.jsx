import Link from "next/link"
import Image from 'next/image'

Home.pageTitle = 'Home'

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 l3"><Image src="/myProfilePicture2023.jpg" alt="Daniel Cox's Profile Picture" width={250} height={300} /></div>
        <div className="col s12 m6 l5 white-text">
          <h2>Who Am I</h2>
          <p>
            I graduated from NSCC IT Programming (Class of 2020).
            For the last 2 years I've been developing a 2D fantasy platform game named Vex Monsters, where you save monsters from an evil mysterious villain.
          </p>

          <p>
            Throughout my experience as a programmer,
            I have completed several challenging projects.
            These projects taught me a hands-on mindset and approach.
            I learned how to analyze, study, and apply learning to figure out solutions when working alone or with a team.
          </p>
        </div>
      </div>
      <div className="row ">
        <h3 className="white-text">Latest Articles</h3>
        <div className="col s12 m5 l3">
          <div className="card">
            <div className="card-image">
              <Image src="/Monster Island 1.0 (1-7-2020) (Ben Topple).png" alt="Daniel Cox's Profile Picture" width={250} height={250} />
            </div>
            <div className="card-content">
            <h4>Vex Monsters Project 2 Demo</h4>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <Link className="blue-text" href="#">Head to the Article</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l3">
          <div className="card">
            <div className="card-image">
              <Image src="/Screenshot 2022-03-25 150644.jpg" alt="Daniel Cox's Profile Picture" width={250} height={250} />
            </div>
            <div className="card-content">
            <h4>Cat Chef Showcase Game</h4>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <Link className="blue-text" href="#">Head to the Article</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l3">
          <div className="card">
            <div className="card-image">
              <Image src="/IMG_1141.jpg" alt="Daniel Cox's Profile Picture" width={250} height={250} />
              
            </div>
            <div className="card-content">
            <h4>PC Builds Showcase</h4>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <Link className="blue-text" href="#">Head to the Article</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l3">
          <div className="card">
            <div className="card-image">
              <Image src="/SpellListReactVersion2022.jpg" alt="Daniel Cox's Profile Picture" width={250} height={250} />
            </div>
            <div className="card-content">
            <h4>DD Spell Recreation</h4>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <Link className="blue-text" href="#">Head to the Article</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
