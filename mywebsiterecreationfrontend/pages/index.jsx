import Link from "next/link"
import Image from 'next/image'

Home.pageTitle = 'Home'
import { getLocalData } from "../comps/localData"

export async function getStaticProps() {
  const localData = await getLocalData('/json/data_all_quick_view.json')

  return {
    props: { localData }
  }
}


export default function Home({ localData }) {
  console.log(localData)
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
        
        {localData.map((data, index) => {
          return (
            <div className="col s12 m5 l3">
            <div className="card">
              <div className="card-image">
                <img src={`${data.image_preview}`} alt="Daniel Cox's Profile Picture" width="250" height="250" />
              </div>
              <div className="card-content">
                <h4>{data.name}</h4>
                <p>{data.summary}</p>
              </div>
              <div className="card-action">
                <Link className="blue-text" href={`article/${data.article_id}`}>Head to the Article</Link>
              </div>
            </div>
          </div>
          )
        })}

      </div>
    </div>
  )
}


