import TopBar from "./components/TopBar";
import SideBarNomina from "./components/SideBar(nomina)";
import ListaEmpleados from "./components/ListaEmpleados";
import GenerarReporte from "./components/GenerarReporte";

function App9(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarNomina/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><ListaEmpleados/><GenerarReporte/></div></div>
            

        </div> 
        </body>
    );

}

export default App9;