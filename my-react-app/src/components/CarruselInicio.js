function CarruselInicio(){
    return(
        
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div style={{textAlign: 'center'}} className="carousel-item active">
                        <img src="img/oficina.jpg" width="70%" height="700px" alt=""/>
                      </div>
                      <div style={{textAlign: 'center'}} className="carousel-item">
                        <img  src={'img/oficina-2.jpg'} width="70%" height="700px" alt=""/>
                      </div>
                      <div style={{textAlign: 'center'}} className="carousel-item">
                        <img src={'img/oficina-3.jpg'} width="70%" height="700px"  alt=""/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{backgroundColor:'lightgray' }}>
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{backgroundColor:'lightgray' }}>
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  
                
                <br/>
                </>
    );
}

export default CarruselInicio;