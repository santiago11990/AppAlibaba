import TopBar from "./components/TopBar";
import SideBarEmpleados from "./components/SideBar(empleado)";
import EditarInfoEmpleado from "./components/EditarInfoEmpleado";

function App7(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarEmpleados/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><EditarInfoEmpleado/></div></div>
            

        </div> 
        </body>
    );

}

export default App7;