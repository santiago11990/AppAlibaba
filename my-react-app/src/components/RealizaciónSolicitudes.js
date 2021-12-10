function RealizacionSolicitudes(){
    return(
        <>
        <section>
                    <div style={{float: 'left'}}>{'\u00A0'} {'\u00A0'}{'\u00A0'}
                        
                        <select style={{border: '2px solid #ccc', borderRadius: '4px'}}placeholder="Seleccione el tipo de documento">
                            <option value="value1">Vacaciones</option>
                            <option value="value2" >Permiso no remunerado</option>
                            <option value="vale3" >Certificados</option>
                        </select>
                        <hr/>
                        <br/>{'\u00A0'} {'\u00A0'}{'\u00A0'}
                        <input type="text" placeholder="Fecha" style={{border: '2px solid #ccc', borderRadius: '4px', width: '80%'}}/>
                        <hr/>
                        <br/>{'\u00A0'} {'\u00A0'}{'\u00A0'}
                        <textarea type="text" placeholder="detalles de la solicitud" style={{border: '2px solid #ccc', borderRadius: '4px', width: '300px', height: '200px'}}></textarea>
                        <br/>{'\u00A0'} {'\u00A0'}{'\u00A0'}
                        <hr/>
                        {'\u00A0'} {'\u00A0'}{'\u00A0'}
                        <a href="edición información-empleado.html" className="btn btn-primary btn-icon-split btn-sm"> 
                            <span className="text">Enviar solicitud</span>
                        </a>
                        </div>
                    <div></div>
                
        </section>
        </>

    );

}

export default RealizacionSolicitudes;