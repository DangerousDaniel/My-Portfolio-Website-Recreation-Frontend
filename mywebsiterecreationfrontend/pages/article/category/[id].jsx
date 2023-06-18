/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: June 18, 2023
    Description: This is the page for article category.
    Notes:
    Resources: 
*/

import { useEffect } from "react";
import ArticleCard from "../../../components/article/articleCard";
import getCategoryAll from "../../../js/crud/category/read/getCategoryAll";
import getCategoryDetail from "../../../js/crud/category/read/getCategoryDetail";
import getArticleAllQuickViewCategory from "../../../js/crud/article/read/getArticleAllQuickViewCategory";

export default function ArticleCategoryPage({ articles, category, databaseMessage, isError }) {
  useEffect(() => {
    if (isError === false) {
      document.title = `DangerousDan996 | ${category.name}`;
    }
    else {
      document.title = `DangerousDan996 | Category Not Found (Error)`;
    }
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {isError && <h4 className="red-text">{databaseMessage}</h4> }

        {articles &&
          articles.map((article, index) => {
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
  const fetchResponse = await getCategoryAll()
  const thePaths = fetchResponse.categoryListJsonData.map(category => {
    return { params: { id: category.category_id.toString() } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const fetchResponseArticleAllQuickViewCategory = await getArticleAllQuickViewCategory(context.params.id, 0, 30)
  const fetchResponseCategoryDetail = await getCategoryDetail(context.params.id)

  return {
    props: {
      articles: fetchResponseArticleAllQuickViewCategory.articlesListJsonData,
      category: fetchResponseCategoryDetail.categoryJsonData,
      databaseMessage: fetchResponseArticleAllQuickViewCategory.databaseMessage,
      isError: fetchResponseArticleAllQuickViewCategory.isError
    }
  }
}