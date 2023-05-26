/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 8, 2023
    Description: This is the page is for home.
    Notes:
    Resources: 
*/

import { getLocalData } from "../components/localData/localData"
import { useEffect } from "react"
import ArticleCard from "../components/article/articleCard"

export default function HomePage({ articles }) {
  
  useEffect(() => {
    document.title = `DangerousDan996 | Home`;
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l3"><img src="/myProfilePicture2023.jpg" alt="Daniel Cox's Profile Picture" width="250" height="300" /></div>
        <div className="col s12 l5 white-text">
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
        
        {articles.map((article, index) => {
          return (
            <ArticleCard key={article.articleData.article_id} data={article}></ArticleCard>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const localData = await getLocalData('articleData.json')

  return {
    props: { 
      articles: localData[1].articles
    }
  }
}


