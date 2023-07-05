/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 1, 2023
    Last Updated: July 5, 2023
    Description: This is the component for layout.
    Notes:
    Resources: 
*/

import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout(props) {
    return (
        <>
            <NavBar></NavBar>
            <br />
            <div>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}