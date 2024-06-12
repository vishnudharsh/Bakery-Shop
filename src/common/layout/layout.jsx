import Footer from "../footer/footer";
import Navbar from "../header/navbar";

function Layout({ children }){
    return (
        <>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
        </>
    )
}
export default Layout;