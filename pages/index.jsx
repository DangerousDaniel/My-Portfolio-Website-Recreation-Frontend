/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 4, 2023
    Description: This is the page for home.
    Notes:
    Resources: 
*/

import { useEffect } from "react"
import ArticleCard from "../components/article/articleCard"
import AboutSection from "../components/about/aboutSection";
import getArticleAllQuickView from "../js/crud/article/read/getArticleAllQuickView";

export default function HomePage({ articlesFirst, databaseMessageFirst, isErrorFirst, articlesSecond, databaseMessageSecond, isErrorSecond }) {

  useEffect(() => {
    document.title = `DangerousDan996 | Home`;
  }, []);

  return (
    <div className="container">
      <AboutSection></AboutSection>
      <div className="row ">
        <h3 className="white-text">Latest Articles</h3>
        {isErrorFirst && <h4 className="red-text">{databaseMessageFirst}</h4>}
        {isErrorSecond && <h4 className="red-text">{databaseMessageSecond}</h4>}

        <div className="col s12">
          {articlesFirst &&
            articlesFirst.map((article, index) => {
              return (
                <ArticleCard key={article.article_id} data={article}></ArticleCard>
              )
            })}
        </div>

        <div className="col s12"> 
          {articlesSecond &&
            articlesSecond.map((article, index) => {
              return (
                <ArticleCard key={article.article_id} data={article}></ArticleCard>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const fetchResponseFirst = await getArticleAllQuickView(0, 3)
  const fetchResponseSecond = await getArticleAllQuickView(3, 6)

  return {
    props: {
      articlesFirst: fetchResponseFirst.articlesListJsonData,
      databaseMessageFirst: fetchResponseFirst.databaseMessage,
      isErrorFirst: fetchResponseFirst.isError,

      articlesSecond: fetchResponseSecond.articlesListJsonData,
      databaseMessageSecond: fetchResponseSecond.databaseMessage,
      isErrorSecond: fetchResponseSecond.isError
    },
    revalidate: 10,
  }
}


