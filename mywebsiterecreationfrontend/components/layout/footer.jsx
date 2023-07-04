/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 4, 2023
    Description: This is the component for the footer.
    Notes:
    Resources: 
*/

import FooterInfoSection from "../footerSection/footerInfoSection";
import FooterResourceSection from '../footerSection/footerResourceSection';
import FooterCopyrightSection from "../footerSection/footerCopyrightSection";

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    <FooterInfoSection></FooterInfoSection>
                    <FooterResourceSection></FooterResourceSection>
                </div>
                <FooterCopyrightSection></FooterCopyrightSection>
            </div>
        </footer>
    )
}