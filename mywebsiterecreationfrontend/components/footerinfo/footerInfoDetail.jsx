/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 27, 2023
    Description: This is the component for displaying footer info details.
    Notes:
    Resources: 
*/

export default function FooterInfoDetail({ footerInfoData }) {
    return (
        <div key={footerInfoData.footer_info_id} className="col l4 s12">
            <h5 >{footerInfoData.name}</h5>
            {footerInfoData.paragraphs.map((paragraph, index) => {
                return (
                    <p key={paragraph.paragraph_id}>
                        {paragraph.description}
                    </p>
                )
            })}
            <ul>
                {footerInfoData.resources &&
                    footerInfoData.resources.map((resource, index) => {
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
}