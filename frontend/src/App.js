import './App.css';
import CompLogin from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import CompDashAdmin from './Components/Dashboard/DashboardAdmin';
import CompShowRol from './Roles/MostrarRol';
import CompEditRol from './Roles/EditarRol';
import CompCrearRol from './Roles/CrearRol';
import CompShowTipo from './TipoProducto/MostrarTipo';
import CompEditTipo from './TipoProducto/EditarTipo';
import CompCreateTipo from './TipoProducto/CrearTipo';
import CompShowEmpleado from './Empleados/MostrarEmpleados';
import CompEditEmpleado from './Empleados/EditarEmpleados';
import CompCreateEmpleado from './Empleados/CrearEmpleados';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompLogin />} />
            <Route path='/Admin' element={ <CompDashAdmin />} />
            <Route path='/Admin/rol/' element={ <CompShowRol />} />
            <Route path='/Admin/rol/edit:id' element={ <CompEditRol />} />
            <Route path='/Admin/rol/create' element={ <CompCrearRol />} />
            <Route path='/Admin/tipo/' element={ <CompShowTipo />} />
            <Route path='/Admin/tipo/edit:id' element={ <CompEditTipo />} />
            <Route path='/Admin/tipo/create' element={ <CompCreateTipo />} />
            <Route path='/Admin/empleado/' element={ <CompShowEmpleado />} />
            <Route path='/Admin/empleado/edit:id' element={ <CompEditEmpleado />} />
            <Route path='/Admin/empleado/create' element={ <CompCreateEmpleado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
