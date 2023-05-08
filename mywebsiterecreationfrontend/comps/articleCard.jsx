/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 8, 2023
    Last Updated: May 8, 2023
    Description: This is the components is for article card.
    Notes:
    Resources: 
*/

import Link from "next/link"

export default function ArticleCard({ data }) {

    return (
        <div className="col s12 m5 l3">
            <div className="card">
                <div className="card-image">
                    <img src={`${data.articleData.image_preview}`} alt={`Article Image Preview ${data.articleData.article_id}`} width="250" height="250" />
                </div>
                <div className="card-content">
                    <h4>{data.articleData.name}</h4>
                    <p>{data.articleData.summary}</p>
                </div>
                <div className="card-action">
                    <Link className="blue-text" href={`../../article/${data.articleData.article_id}`}>Head to the Article</Link>
                </div>
            </div>
        </div>
  
    )
}