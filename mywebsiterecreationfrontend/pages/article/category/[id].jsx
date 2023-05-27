/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 8, 2023
    Description: This is the page is for article category.
    Notes:
    Resources: 
*/

import { getLocalData } from "../../../components/localData/localData"
import { useEffect } from "react";
import ArticleCard from "../../../components/article/articleCard";

export default function ArticleCategoryPage({ articles, category }) {

  useEffect(() => {
    document.title = `DangerousDan996 | ${category.name}`;
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {articles.map((article, index) => {
          return (

            <>
              <h3 className="white-text">{category.name}</h3>
              <ArticleCard key={article.articleData.article_id} data={article}></ArticleCard>
            </>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const localData = await getLocalData('categoryData.json')

  const thePaths = localData[0].categories.map(category => {
    return { params: { id: category.category_id.toString() } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const localDataCategory = await getLocalData('categoryData.json')
  const localDataArticle = await getLocalData('articleData.json')

  const articles = localDataArticle[0].articles.filter(article => article.articleData.category_id.toString() === context.params.id)
  const category = localDataCategory[0].categories.filter(category => category.category_id.toString() === context.params.id)

  return {
    props: {
      articles,
      category: category[0]
    }
  }
}