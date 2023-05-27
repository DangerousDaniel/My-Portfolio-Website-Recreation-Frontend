/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 27, 2023
    Description: This is the components for displaying footer resource details.
    Notes:
    Resources: 
*/

export default function FooterResourceDetail({ resourceListData }) {
    return (
        <div className="col l4 s12">
            <h5>{resourceListData.name}</h5>
            <ul>
                {resourceListData.resources.map((resource, index) => {
                    return (
                        <li key={resource.resource_id}>
                            <a target="_blank" className="white-text" href={resource.link}> {resource.name} </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}