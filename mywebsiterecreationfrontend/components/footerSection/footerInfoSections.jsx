/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 27, 2023
    Last Updated: June 5, 2023
    Description: This is the component for displaying footer info.
    Notes:
    Resources: 
*/

export default function FooterInfoSections({ footerInfoListData }) {
    return (
        <div>
            {footerInfoListData[0].footerInfos.map((footerInfo, index) => {
                return (
                    <div key={footerInfo.footer_info_id} className="col l4 s12">
                        <h5 >{footerInfo.name}</h5>
                        {footerInfo.paragraphs.map((paragraph, index) => {
                            return (
                                <p key={paragraph.paragraph_id}>
                                    {paragraph.description}
                                </p>
                            )
                        })}
                        <ul>
                            {footerInfo.resources &&
                                footerInfo.resources.map((resource, index) => {
                                    return (
                                        <li key={resource.resource_id}>
                                            <a target="_blank" className="white-text" href={resource.link}>
                                                {resource.image_name &&
                                                    <img src={resource.image_file_path} width={20} height={20} alt={resource.image_name} />
                                                }
                                                <span>&nbsp;</span>
                                                {resource.description}
                                            </a>
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