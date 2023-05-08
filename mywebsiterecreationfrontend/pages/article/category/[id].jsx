/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 8, 2023
    Description: This is the page is for article category.
    Notes:
    Resources: 
*/

import { getLocalData } from "../../../comps/localData"
import { useEffect } from "react";
import ArticleCard from "../../../comps/articleCard";

export default function ArticleCategoryPage({ articles, category }) {

  useEffect(() => {
    document.title = `DangerousDan996 | ${category.name}`;
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <h3 className="white-text">Articles Other</h3>
        {articles.map((article, index) => {
          return (
            <ArticleCard key={article.articleData.article_id} data={article}></ArticleCard>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const localData = await getLocalData()

  const thePaths = localData[0].categories.map(category => {
    return { params: { id: category.category_id.toString() } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const localData = await getLocalData()

  const articles = localData[1].articles.filter(article => article.articleData.category_id.toString() === context.params.id)
  const category = localData[0].categories.filter(category => category.category_id.toString() === context.params.id)

  return {
    props: {
      articles,
      category: category[0]
    }
  }
}