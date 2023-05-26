/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 26, 2023
    Description: This is the page is for article details.
    Notes:
    Resources: 
*/

import { getLocalData } from "../../components/localData/localData"
import { useEffect } from "react";

export default function ArticleDetail({ article }) {
    
    useEffect(() => {
        document.title = `DangerousDan996 | ${article.articleData.name}`;
      }, []);
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    let createdDate = new Date(article.articleData.date_created)
    let lastUpdateDate = new Date(article.articleData.date_last_update)

    return (
        <div key={article.articleData.article_id} className="container white-text">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="right">Last Updated: {createdDate.toLocaleDateString("en-US", options)}</div>
                        <br />
                        <div className="right">Created Date: {lastUpdateDate.toLocaleDateString("en-US", options)}</div>
                        <div className="col s12"><h3>{article.articleData.name}</h3></div>
                        {article.pages.map((page, index) => {
                            return (
                                <div key={page.page_id} className="col s12">
                                    <p>
                                        {page.paragraph}
                                    </p>

                                    {page.image_file != ""
                                        ? <div className="col s12">
                                            <img src={page.image_file} width={500} height={300} alt={`Page Image ${page.id}`} />
                                        </div>
                                        : <></>
                                    }
                                </div>
                            )
                        })}

                        {article.resources.map((resource, index) => {
                            return (
                                <div key={resource.resource_id} className="col s12">
                                    <h5><a className="blue-text" target="_blank" href={resource.link}>{resource.name}</a></h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const localData = await getLocalData('articleData.json')

    const thePaths = localData[1].articles.map(article => {
        return { params: { id: article.articleData.article_id.toString() } }
    })

    return {
        paths: thePaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const localData = await getLocalData('articleData.json')

    const article = localData[1].articles.filter(article => article.articleData.article_id.toString() === context.params.id)

    return {
        props: {
            article: article[0]
        }
    }
}