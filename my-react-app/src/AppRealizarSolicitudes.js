import TopBar from "./components/TopBar";
import SideBarEmpleados from "./components/SideBar(empleado)";
import Realizaci√≥nSolicitudes from "./components/Realizaci√≥nSolicitudes";

function App6(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarEmpleados/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><Realizaci√≥nSolicitudes/></div></div>
            

        </div> 
        </body>
    );

}

export default App6;