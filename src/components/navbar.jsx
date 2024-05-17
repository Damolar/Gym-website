import {Link} from "react-router-dom"



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container">
                <a className="navbar-brand" href="#">
                <i className="bi bi-geo-alt-fill"style={{ color: 'white', padding: '1rem' }}></i>
                    <b>SHAPE</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link" href="#">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link" href="#">SERVICE</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="gallery" className="nav-link" href="#">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PRICING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                    </ul>
                </div>
            </div>
         </nav>
    )
}
export default Navbar
