import "./navbar.css"
function Navbar({children}) {
    return ( 
        <div className="navbar-main">
            <div className="navbar-content">

            </div>
            <div className="navbar-children">
                {children}
            </div>
        </div>
     );
}

export default Navbar;