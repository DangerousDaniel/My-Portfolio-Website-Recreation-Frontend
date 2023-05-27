/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: May 27, 2023
    Description: This is the components is for footer.
    Notes:
    Resources: 
*/

import footerInfoData from '../../json/footerInfoData.json'
import FooterInfoDetail from "../footerinfo/footerInfoDetail";
import footerResourceData from "../../json/footerResourceData.json"
import FooterResourceDetail from '../footerResoucre/footerResourceDetail';

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container">
                <div className="row">
                    {footerInfoData[0].footerInfos.map((footerInfo, index) => {
                        return (
                            <FooterInfoDetail footerInfoData={footerInfo} ></FooterInfoDetail>
                        )
                    })}
                  
                  {footerResourceData[0].footerResources.map((footerResource, index) => {
                    return (
                        <FooterResourceDetail resourceListData={footerResource} ></FooterResourceDetail>
                    )
                  })}
                  
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