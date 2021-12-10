function GenerarReporte(){
    return(
        
                    <div className="card mb-4">
                        <div className="card-header">
                            <p style={{textAling: 'center'}}>Generar reporte</p>
                        </div>
                        <div className="card-body">
                            <div style={{float: 'left'}}>
                                <h3 className="h4 mb-2 text-gray-800">Inserte un salario para generar el reporte</h3>
                                <input type="text"/>
                            </div>
                            <div >
                                <h3 className="h4 mb-2 text-gray-800" style={{textAling: 'center'}}>Formato</h3>
                                <div style={{textAling: 'center'}}>
                                <select>
                                    <option value="1">PDF</option> 
                                    <option value="2">ePUB</option> 
                                    <option value="3">Word</option>
                                </select>
                                </div>    
                                
                            </div>
                    </div>
                    
                    
                    <div style={{textAling: 'left'}}>
                        <a href="none" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>


                



            </div>
    );
}

export default GenerarReporte;