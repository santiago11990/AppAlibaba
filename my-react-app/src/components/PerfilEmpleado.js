function PerfilEmpleado(){
    return(
        <>
        <section>
                <div >
                    <img src={'img/foto-perfil-usuario.png'} width="200px" height="200px" float="left" alt="" />
                </div>
                <div >
                    <h1 className="h3 mb-2 text-gray-800" style={{textAlign: 'center' }}  >NOMBRE: </h1>
                </div>
                </section>

                <section>
                <section style={{textAlign: 'left' }}>
                    <div style={{textAlign: 'left' }} >
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'} ID</h4>
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'}Teléfono</h4>
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'}Dirección</h4>
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'}Fecha de contratación</h4>
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'}Cargo</h4>
                        <h4 className="h4 mb-2 text-gray-800">{'\u00A0'} {'\u00A0'}Salario</h4>
                        <br/>{'\u00A0'} {'\u00A0'}
                        <a href="edición información-empleado.html" className="btn btn-primary btn-icon-split btn-sm"> 
                            <span className="text">Editar</span>
                        </a>
                    </div>

                </section>
                    <section style={{float: 'center' }}>
                    
                   
                        <h1 className="h3 mb-2 text-gray-800" style={{textAlign: 'center' }}>Resumen</h1>
                        <div style={{textAlign: 'center' }}><textarea name="textarea" rows="10" cols="50" >Write something here</textarea></div>
                    
                </section>
            </section>
        </>
    );

}

export default PerfilEmpleado;