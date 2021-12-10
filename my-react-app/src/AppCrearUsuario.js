import TopBar from "./components/TopBar";
import SideBarAdmin from "./components/SideBar(admin)";
import CrearUsuario from "./components/CrearUsuario";

function App4(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarAdmin/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><CrearUsuario/></div></div>
            

        </div> 
        </body>
    );

}

export default App4;