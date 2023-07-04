/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 8, 2023
    Last Updated: July 4, 2023
    Description: This is the component for article card.
    Notes:
    Resources: 
*/
import Link from "next/link"

export default function ArticleCard({ data }) {

    return (
        <div className="col s12 l4">
            <div className="card">
                <div className="card-image">
                    <img src={data.image_preview} alt={`Article Image Preview ${data.article_id}`} />
                </div>
                <div className="card-content">
                    <h4>{data.name}</h4>
                    <p>{data.summary}</p>
                </div>
                <div className="card-action">
                    <Link className="blue-text" href={`../../article/${data.article_id}`}>Learn More!</Link>
                </div>
            </div>
        </div>
  
    )
}