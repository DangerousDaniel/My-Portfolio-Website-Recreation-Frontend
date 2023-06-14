/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 27, 2023
    Description: This is the page for article details.
    Notes:
    Resources: 
*/

import { getLocalData } from "../../components/localData/localData"
import { useEffect } from "react";

export default function ArticleDetailPage({ article }) {

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
                        <div className="right">Last Updated: {lastUpdateDate.toLocaleDateString("en-US", options)}</div>
                        <br />
                        <div className="right">Created Date: {createdDate.toLocaleDateString("en-US", options)}</div>
                        <div className="col s12"><h3>{article.articleData.name}</h3></div>
                        {article.page_context.map((page_context, index) => {
                            return (
                                <div key={index}>
                                    {page_context.paragraph &&
                                        <div key={page_context.paragraph.paragraph_id} className="col s12">
                                            < p>
                                                {page_context.paragraph.description}
                                            </p>
                                        </div>
                                    }

                                    {page_context.image &&
                                        <div key={page_context.image.image_id} className="col s12">
                                            <img src={page_context.image.link} width={500} height={300} alt={page_context.image.name} />
                                            <br />
                                            <span>{page_context.image.description}</span>
                                        </div>
                                    }

                                    {page_context.video &&
                                        <div key={page_context.video.video_id} className="col s12">
                                            <iframe width={853} height={480} src={`${page_context.video.link}`} frameBorder="0" allowFullScreen></iframe>
                                        </div>
                                    }

                                    {page_context.resources &&
                                        <>
                                            {page_context.resources.map((resource, index) => {
                                                return (
                                                    <div key={resource.resource_id} className="col s12">
                                                        <h5>
                                                            <a className="blue-text" target="_blank" href={resource.link}>{resource.description}
                                                                {resource.image_name &&
                                                                    <img src={resource.image_link} width={20} height={20} alt={resource.image_name} />
                                                                }
                                                            </a>
                                                        </h5>
                                                    </div>
                                                )
                                            })
                                            }
                                        </>
                                    }
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

    const thePaths = localData[0].articles.map(article => {
        return { params: { id: article.articleData.article_id.toString() } }
    })

    return {
        paths: thePaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const localData = await getLocalData('articleData.json')

    const article = localData[0].articles.filter(article => article.articleData.article_id.toString() === context.params.id)

    return {
        props: {
            article: article[0]
        }
    }
}