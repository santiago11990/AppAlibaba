function ListaUsuarios(){
    return(
        <>
        <div className="container-fluid">

    
    <h1 className="h3 mb-2 text-gray-800">Lista de usuarios</h1>
    
    
   
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Usuarios registrados</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Identificación</th>
                            <th>Fecha de contratación</th>
                            <th>Cargo</th>
                            <th>Tipo</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Nombre</th>
                            <th>Identificación</th>
                            <th>Fecha de contratación</th>
                            <th>Cargo</th>
                            <th>Tipo</th>
                            <th>Salario</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>xd</td>
                            <td>123456789</td>
                            <td>1/11/2021</td>
                            <td>Oficinista</td>
                            <td>Empleado</td>
                            <td>1.500.000</td>
                            
                        </tr>
                        <tr>
                            <td>xd</td>
                            <td>123456789</td>
                            <td>1/11/2021</td>
                            <td>Gestior de recursos humanos</td>
                            <td>Nómina</td>
                            <td>2.300.000</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>


<section>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<a href="none" className="btn btn-primary btn-icon-split">
        <span className="icon text-white-50">
            <i className="fas fa-flag"></i>
        </span>
        <span className="text">Nuevo</span>
    </a>

    <a href="none" className="btn btn-success btn-icon-split">
        <span className="icon text-white-50">
            <i className="fas fa-check"></i>
        </span>
        <span className="text">Editar</span>
    </a>

    <a href="none" className="btn btn-danger btn-icon-split">
        <span className="icon text-white-50">
            <i className="fas fa-trash"></i>
        </span>
        <span className="text">Eliminar</span>
    </a>

</section>

</>




    );

}

export default ListaUsuarios;