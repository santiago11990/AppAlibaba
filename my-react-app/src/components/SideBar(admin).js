import { Link } from "react-router-dom";

function SideBarAdmin(){
    return(
        
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
                <Link className="sidebar-brand d-flex align-items-center justify-content-center"to="/AppDashboard">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src={'img/alibaba-icon.png'} width="60px" height="40px" alt=""/>
                    </div>
                    <div className="sidebar-brand-text mx-3">Alibaba</div>
                </Link>
    
               
    
                <div className="sidebar-heading">
                    Interface
                </div>
    
                <li className="nav-item">
                    <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Gestión de usuarios</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Gestión de usuarios:</h6>
                            <Link className="collapse-item" to="/AppListaUsuarios">Ver lista de usuarios</Link>
                            <Link className="collapse-item" to="/AppCrearUsuario">Ingresar nuevo usuario</Link>                        </div>
                    </div>
                </li>
    
               
    
                <hr className="sidebar-divider d-none d-md-block"/>
    
                
    
                
            </ul>

    );

}

export default SideBarAdmin;