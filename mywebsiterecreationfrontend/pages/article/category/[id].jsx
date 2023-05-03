import Image from 'next/image'
import Link from "next/link"

ArticleCategoryAllQuickView.pageTitle = 'Article Category All Quick View'

export default function ArticleCategoryAllQuickView() {
    return (
        <div className="container">
        <div className="row ">
        <h3 className="white-text">Articles Other</h3>
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
              <Link className="blue-text" href="article/1">Head to the Article</Link>
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
              <Link className="blue-text" href="article/2">Head to the Article</Link>
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
              <Link className="blue-text" href="article/3">Head to the Article</Link>
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
              <Link className="blue-text" href="article/4">Head to the Article</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}