function CrearUsuario (){
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
    <select style={{border: '2px solid #ccc', borderRadius: '4px', width: '80%'}}placeholder="Seleccione el tipo de documento">
        <option value="value1">Cédula de ciudadanía CC</option>
        <option value="value2" >Resgistro especial de permanencia</option>
        <option value="value3">Cédula de extranjería</option>
    </select>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Documento de identidad" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Teléfono" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <select style={{border: '2px solid #ccc', borderRadius: '4px', width: '80%'}}placeholder="Seleccione el tipo de documento">
        <option value="value1">Empleado</option>
        <option value="value2" >Nomina</option>
    </select>
    </div>


<div>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="EPS" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Dirección" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Departamento" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    
    <input type="text" placeholder="Ciudad" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Fecha de ingreso" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
    <hr/>
    <br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <input type="text" placeholder="Contraseña" style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
</div>


    



<hr/>
<hr/>
<br/>
<br/>
<br/>

<br/>{'\u00A0'}{'\u00A0'}{'\u00A0'}

<a href="none" class="btn btn-primary btn-icon-split">
    
    <span class="text">Registar nuevo usuario</span>

</a> 

</>
    );


}

export default CrearUsuario;