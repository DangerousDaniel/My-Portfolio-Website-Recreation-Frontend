/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: June 5, 2023
    Description: This is the component for displaying footer resource details.
    Notes:
    Resources: 
*/

export default function FooterResourceSections({ footerResourceListData }) {
    return (
        <div>
            {footerResourceListData[0].footerResources.map((footerResource, index) => {
                return (
                    // <FooterResourceDetail resourceListData={footerResource} ></FooterResourceDetail>
                    <div key={footerResource.footer_resource_id} className="col l4 s12">
                        <h5>{footerResource.name}</h5>
                        <ul>
                            {footerResource.resources.map((resource, index) => {
                                return (
                                    <li key={resource.resource_id}>
                                        <a target="_blank" className="white-text" href={resource.link}> {resource.name} </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}