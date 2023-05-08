import Link from "next/link"
import { getLocalData } from "../../../comps/localData"
import { useEffect } from "react";

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
            <div key={article.articleData.article_id} className="col s12 m5 l3">
              <div className="card">
                <div className="card-image">
                  <img src={`${article.articleData.image_preview}`} alt={`Article Image Preview ${article.articleData.article_id}`} width="250" height="250" />
                </div>
                <div className="card-content">
                  <h4>{article.articleData.name}</h4>
                  <p>{article.articleData.summary}</p>
                </div>
                <div className="card-action">
                  {console.log(`article/${article.articleData.article_id}`)}
                  <Link className="blue-text" href={`../${article.articleData.article_id}`} replace={true}>Head to the Article</Link>
                </div>
              </div>
            </div>
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