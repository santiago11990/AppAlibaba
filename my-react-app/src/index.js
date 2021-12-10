import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AppLogin from './AppLogin';
import AppDashboard from './AppDashboard';
import AppCrearUsuario from './AppCrearUsuario';
import AppListaUsuarios from './AppListaUsuarios';
import AppRealizarSolicitudes from './AppRealizarSolicitudes';
import AppDescargarComprobante from './AppDescargarComprobante';
import AppPerfilEmpleado from './AppPerfilEmpleado';
import AppEditarInfoEmpleado from './AppEditarInfoEmpleado';
import AppCrearEmpleado from './AppCrearEmpleado';
import AppListaEmpleados from './AppListaEmpleados';
import AppTablaSolicitudes from './AppTablaSolicitudes';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
<Router>
<Routes>
<Route exact path="/" element={<App/>} />
<Route path="login" element={<AppLogin/>} />
<Route exact path="AppDashboard" element={<AppDashboard/>} />
<Route path="AppCrearUsuario" element={<AppCrearUsuario/>} />
<Route path="AppListaUsuarios" element={<AppListaUsuarios/>} />
<Route path="AppRealizarSolicitudes" element={<AppRealizarSolicitudes/>} />
<Route path="AppDescargarcomprobante" element={<AppDescargarComprobante/>} />
<Route path="AppEditarInfoEmpleado" element={<AppEditarInfoEmpleado/>} />
<Route path="AppPerfilEmpleado" element={<AppPerfilEmpleado/>} />
<Route path="AppCrearEmpleado" element={<AppCrearEmpleado/>} />
<Route path="AppListaEmpleados" element={<AppListaEmpleados/>} />
<Route path="AppTablaSolicitudes" element={<AppTablaSolicitudes/>} />
</Routes>
</Router>
</React.StrictMode>
,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
