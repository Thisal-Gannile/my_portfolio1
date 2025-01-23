export default function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">            
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SuperMart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" href="#">Offers</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Dry Rations</a></li>
                        <li><a className="dropdown-item" href="#">Fruits</a></li>
                        <li><a className="dropdown-item" href="#">Vegetables</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

