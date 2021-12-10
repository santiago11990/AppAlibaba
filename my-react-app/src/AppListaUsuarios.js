import TopBar from "./components/TopBar";
import SideBarAdmin from "./components/SideBar(admin)";
import ListaUsuarios from "./components/ListaUsuarios";

function App5(){
    return(
        <body id="page-top">
        <div id="wrapper" >
            <SideBarAdmin/>
        <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><ListaUsuarios/></div></div>
            

        </div> 
        </body>
    );

}

export default App5;