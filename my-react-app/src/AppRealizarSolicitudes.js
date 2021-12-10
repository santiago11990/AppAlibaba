import TopBar from "./components/TopBar";
import SideBarEmpleados from "./components/SideBar(empleado)";
import RealizaciónSolicitudes from "./components/RealizaciónSolicitudes";

function App6(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarEmpleados/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><RealizaciónSolicitudes/></div></div>
            

        </div> 
        </body>
    );

}

export default App6;