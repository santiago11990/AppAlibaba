import { Link } from "react-router-dom";

function SideBarEmpleados(){
    return(
        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard empleado.html">
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
                    <span>Opciones de usuario</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Menú de usuario:</h6>
                        <Link className="collapse-item" to="/AppPerfilEmpleado">Ver información de usuario</Link>
                        <Link className="collapse-item" to="/AppEditarInfoEmpleado">Editar información de <br/> usuario</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Realizar solicitudes</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Solicitar:</h6>
                        <Link className="collapse-item" to="/AppRealizarSolicitudes">Vacaciones, certificados y <br/> permisos no remunerados</Link>
                        
                        
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/AppDescargarComprobante">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Comprobantes de pago</span></Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>

            

            
        </ul>

    );
}

export default SideBarEmpleados;