/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: June 5, 2023
    Description: This is the component for the footer.
    Notes:
    Resources: 
*/

import footerInfoDataJson from '../../json/footerInfoData.json'
import FooterInfoSections from "../footerSection/footerInfoSections";
import footerResourceDataJson from "../../json/footerResourceData.json"
import FooterResourceSections from '../footerSection/footerResourceSections';

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    <FooterInfoSections footerInfoListData={footerInfoDataJson} ></FooterInfoSections>
                    <FooterResourceSections footerResourceListData={footerResourceDataJson} ></FooterResourceSections>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2013 - 2023 DangerousDan996 | All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}