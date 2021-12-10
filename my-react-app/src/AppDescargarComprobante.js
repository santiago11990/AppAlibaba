import TopBar from "./components/TopBar";
import SideBarEmpleados from "./components/SideBar(empleado)";
import DescargarReportePago from "./components/DecargarReportePago";

function App7(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarEmpleados/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><DescargarReportePago/></div></div>
            

        </div> 
        </body>
    );

}

export default App7;