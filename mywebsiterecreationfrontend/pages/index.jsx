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
import getAllArticleQuickView from "../js/crud/article/read/getAllArticleQuickView";

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
            <ArticleCard key={article.article_id} data={article}></ArticleCard>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let articles = await getAllArticleQuickView(0, 6)

  return {
    props: {
      articles: articles
    },
    revalidate: 10,
  }
}


