import { Link } from "react-router-dom";

function SideBarNomina(){
    return(
        

        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard nomina.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <img src={'img/alibaba-icon.png'} width="60px" height="40px" alt=""/>
                </div>
                <div className="sidebar-brand-text mx-3">Alibaba</div>
            </a>

           

           <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Empleados</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Gestión de empleados:</h6>
                        <Link className="collapse-item" to="/AppListaEmpleados">Ver lista de empleado</Link>
                        <Link className="collapse-item" to="/AppCrearEmpleado">Ingresar nuevo empleado</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Autorizar solicitudes</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Autorizar:</h6>
                        <Link className="collapse-item" to="/AppTablaSolicitudes">Vacaciones, certificados <br/> y permisos</Link>
                        
                        
                    </div>
                </div>
            </li>

            

            <hr className="sidebar-divider d-none d-md-block"/>

            

            
        </ul>
    );
}

export default SideBarNomina;