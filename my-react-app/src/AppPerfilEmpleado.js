import TopBar from "./components/TopBar";
import SideBarEmpleados from "./components/SideBar(empleado)";
import PerfilEmpleado from "./components/PerfilEmpleado";

function App8(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarEmpleados/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><PerfilEmpleado/></div></div>
            

        </div> 
        </body>
    );

}

export default App8;