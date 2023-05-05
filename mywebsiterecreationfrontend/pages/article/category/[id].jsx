import Link from "next/link"
import { getLocalData } from "../../../comps/localData"

ArticleCategoryAllQuickView.pageTitle = 'Article Category All Quick View'


export default function ArticleCategoryAllQuickView({ articles }) {
  console.log(articles)

  return (
    <div className="container">
      <div className="row ">
        <h3 className="white-text">Articles Other</h3>
        {articles.map((article, index) => {
          return (
            <div key={article.articleData.article_id} className="col s12 m5 l3">
              <div className="card">
                <div className="card-image">
                  <img src={`${article.articleData.image_preview}`} alt="Daniel Cox's Profile Picture" width="250" height="250" />
                </div>
                <div className="card-content">
                  <h4>{article.articleData.name}</h4>
                  <p>{article.articleData.summary}</p>
                </div>
                <div className="card-action">
                  <Link className="blue-text" href={`article/${article.articleData.article_id}`}>Head to the Article</Link>
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

  return {
    props: {
      articles
    }
  }
}