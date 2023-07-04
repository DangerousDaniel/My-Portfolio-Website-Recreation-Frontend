/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 4, 2023
    Description: This is the page for article category.
    Notes:
    Resources: 
*/

import { useEffect } from "react";
import ArticleCard from "../../../components/article/articleCard";
import getCategoryAll from "../../../js/crud/category/read/getCategoryAll";
import getCategoryDetail from "../../../js/crud/category/read/getCategoryDetail";
import getArticleAllQuickViewCategory from "../../../js/crud/article/read/getArticleAllQuickViewCategory";

export default function ArticleCategoryPage({ articles, category }) {
  useEffect(() => {
    document.title = `DangerousDan996 | ${category.name}`;
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {articles.map((article, index) => {
          return (
            <div key={article.article_id}>
              <h3 className="white-text">{category.name}</h3>
              <ArticleCard data={article}></ArticleCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const categories = await getCategoryAll()
  const thePaths = categories.map(category => {
    return { params: { id: category.category_id.toString() } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const articles = await getArticleAllQuickViewCategory(context.params.id, 0, 30)
  const category = await getCategoryDetail(context.params.id)

  return {
    props: {
      articles: articles,
      category: category
    }
  }
}