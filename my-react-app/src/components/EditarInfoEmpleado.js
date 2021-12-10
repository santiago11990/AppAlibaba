function EditarInfoEmpleado(){
    return(
        <>
        <div style={{float: 'left' }}>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Nombre" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Apellido" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Email" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Documento de identidad" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Teléfono" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <input type="text" placeholder="Dirección" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
        <hr/>
        <br/>
        <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        
        <a href="none" className="btn btn-primary btn-icon-split">    
            <span className="text">Registar nuevos cambios</span>
        </a>
    </div>
    <br/>
    <br/>
    </>
    
    );

}

export default EditarInfoEmpleado;