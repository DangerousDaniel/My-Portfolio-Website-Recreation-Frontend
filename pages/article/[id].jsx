/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 5, 2023
    Description: This is the page for article details.
    Notes:
    Resources: 
*/

import { useEffect } from "react";
import getArticleAll from "../../js/crud/article/read/getArticleAll";
import getArticleDetail from "../../js/crud/article/read/getArticleDetail";
import dayjs from "dayjs";

export default function ArticleDetailPage({ article, databaseMessage, isError }) {
    let createdDate = null
    let lastUpdateDate = null


    useEffect(() => {
        if (isError === false) {
            document.title = `DangerousDan996 | ${article.articleData.name}`;
        }
        else {
            document.title = `DangerousDan996 | Article Not Found (Error)`;
        }
    }, []);

    if (isError === false) {
        createdDate = dayjs(article.articleData.date_created)
        lastUpdateDate = dayjs(article.articleData.date_last_update)
    }

    return (
        <div>
            {isError && <h4 className="red-text">{databaseMessage}</h4>}

            {article &&
                <div key={article.articleData.article_id} className="container white-text">
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="right">Last Updated: {lastUpdateDate.format('dddd, MMMM DD, YYYY')}</div>
                                <br />
                                <div className="right">Created Date: {createdDate.format('dddd, MMMM DD, YYYY')}</div>
                                <div className="col s12"><h3>{article.articleData.name}</h3></div>
                                {article.pageContext.map((page_context, index) => {
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
                                                    <img src={page_context.image.link} alt={page_context.image.name} width={500} className="responsive-img" />
                                                    <br />
                                                    <span>{page_context.image.description}</span>
                                                    <br />
                                                </div>
                                            }

                                            {page_context.video &&
                                                <div key={page_context.video.video_id} className="col s12">
                                                    <div className="iframe-container-video">
                                                        <iframe width={853} height={480} className="responsive-video" src={page_context.video.link} frameBorder="0" allowFullScreen></iframe>
                                                    </div>
                                                    <br />
                                                </div>
                                            }

                                            {page_context.resources &&
                                                <>
                                                    {page_context.resources.map((resource, index) => {
                                                        return (
                                                            <div key={resource.resource_id} className="col s12">
                                                                <h5>
                                                                    <a className="blue-text" target="_blank" href={resource.link}>
                                                                        {resource.logo_name &&
                                                                            <img src={`/images/logo/${resource.logo_local_filepath}.png`} width={30} height={30} alt={resource.logo_name} />
                                                                        }
                                                                        <span>&nbsp;</span>
                                                                        {resource.description}
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
            }
        </div>
    )
}

export async function getStaticPaths() {
    const fetchResponse = await getArticleAll()
    const thePaths = fetchResponse.articlesListJsonData.map(article => {
        return { params: { id: article.articleData.article_id.toString() } }
    })

    return {
        paths: thePaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const fetchResponse = await getArticleDetail(context.params.id)

    return {
        props: {
            article: fetchResponse.articleJsonData,
            databaseMessage: fetchResponse.databaseMessage,
            isError: fetchResponse.isError
        },
        revalidate: 10
    }
}