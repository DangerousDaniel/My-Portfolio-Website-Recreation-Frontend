/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: June 7, 2023
    Description: This is the page for home.
    Notes:
    Resources: 
*/

import { getLocalData } from "../components/localData/localData"
import { useEffect } from "react"
import ArticleCard from "../components/article/articleCard"
import AboutSection from "../components/about/aboutSection";

export default function HomePage({ articles }) {

  useEffect(() => {
    document.title = `DangerousDan996 | Home`;
  }, []);

  return (
    <div className="container">
      <AboutSection></AboutSection>
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
  
  return {
    props: {
      articles: localDataArticle[0].articles
    }
  }
}


