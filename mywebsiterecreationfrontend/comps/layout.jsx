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