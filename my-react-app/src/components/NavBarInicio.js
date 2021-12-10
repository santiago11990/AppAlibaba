import { Link} from "react-router-dom";

function NavBarInicio(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <h1 className="h1 mb-1 text-gray-800">Alibaba</h1>

                    
                    <ul className="navbar-nav ml-auto">
  
                        
                        <Link to="/login" className="btn btn-primary btn-icon-split width=3">
                            
                            <span className="text">Iniciar sesión</span>
                        </Link>

                    </ul>

                </nav>
    );
}

export default NavBarInicio;