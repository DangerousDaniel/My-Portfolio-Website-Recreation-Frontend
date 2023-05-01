import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout(props) {
    return (
        <>
            <NavBar></NavBar>
            <body>
                <div>
                {props.children}
                </div>
            </body>
            <Footer></Footer>
        </>
    )
}