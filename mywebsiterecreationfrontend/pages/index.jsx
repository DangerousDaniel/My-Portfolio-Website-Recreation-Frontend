/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 26, 2023
    Description: This is the page is for home.
    Notes:
    Resources: 
*/

import { getLocalData } from "../components/localData/localData"
import { useEffect } from "react"
import ArticleCard from "../components/article/articleCard"
import AboutDetail from "../components/about/aboutDetail";

export default function HomePage({ articles, aboutMes }) {

  useEffect(() => {
    document.title = `DangerousDan996 | Home`;
  }, []);

  return (
    <div className="container">
      <AboutDetail aboutData={aboutMes[0]}></AboutDetail>
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
  const localDataArticle = await getLocalData('articleData.json')
  const localDataAbout = await getLocalData('aboutMeData.json')

  return {
    props: {
      articles: localDataArticle[0].articles,
      aboutMes: localDataAbout[0].aboutMes
    }
  }
}


