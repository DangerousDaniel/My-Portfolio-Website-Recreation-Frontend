/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: June 18, 2023
    Description: This is the page for home.
    Notes:
    Resources: 
*/

import { useEffect } from "react"
import ArticleCard from "../components/article/articleCard"
import AboutSection from "../components/about/aboutSection";
import getArticleAllQuickView from "../js/crud/article/read/getArticleAllQuickView";

export default function HomePage({ articles, databaseMessage, isError }) {

  useEffect(() => {
    document.title = `DangerousDan996 | Home`;
  }, []);

  return (
    <div className="container">
      <AboutSection></AboutSection>
      <div className="row ">
        <h3 className="white-text">Latest Articles</h3>
        {isError && <h4 className="red-text">{databaseMessage}</h4> }
        
        {articles &&
          articles.map((article, index) => {
            return (
              <ArticleCard key={article.article_id} data={article}></ArticleCard>
            )
          })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const fetchResponse = await getArticleAllQuickView(0, 6)

  return {
    props: {
      articles: fetchResponse.articlesListJsonData,
      databaseMessage: fetchResponse.databaseMessage,
      isError: fetchResponse.isError
    },
    revalidate: 10,
  }
}


