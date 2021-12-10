import TopBar from "./components/TopBar";
import SideBarNomina from "./components/SideBar(nomina)";
import CrearEmpleado from "./components/CrearEmpleado";

function App10(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarNomina/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><CrearEmpleado/></div></div>
            

        </div> 
        </body>
    );

}

export default App10;