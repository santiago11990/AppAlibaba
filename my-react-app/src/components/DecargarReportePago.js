function DescargarReportePago(){
    return(
        <div className="container-fluid">

                    
                    <h1 className="h3 mb-2 text-gray-800">Reportes de pago</h1>
                    
                    
                    
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Aquí puedes descargar tu reporte de pago</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Fecha de pago</th>
                                            <th>Mes</th>
                                            <th>Monto</th>
                                            <th>Descargar reporte</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Fecha de pago</th>
                                            <th>Mes</th>
                                            <th>Monto</th>
                                            <th>Descargar reporte</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>12/11/2021</td>
                                            <td>Noviembre</td>
                                            <td>2.000.000</td>
                                            <td><a href="none" className="btn btn-info btn-icon-split">
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-info-circle"></i>
                                                </span>
                                                <span className="text">Descargar reporte</span>
                                            </a></td>
                                            
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                

            
    );

}

export default DescargarReportePago;