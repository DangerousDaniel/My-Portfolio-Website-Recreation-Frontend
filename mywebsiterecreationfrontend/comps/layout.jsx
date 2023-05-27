import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout(props) {
    return (
        <>
            <NavBar></NavBar>
            <div>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}