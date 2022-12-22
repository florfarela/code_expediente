
import './App.css';
import './css/principal.css';
import './css/headerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,Link} from'react-router-dom';
import DoctorPanel from './componets/DoctorPanel';
import EditPatient from './componets/EditPatient';
import Reseption from './componets/Reseption';
import Principal from './componets/Principal';

import PatientView from './componets/PatientView';
import Login from './componets/Login';
import ShowPatient_Receptionist from './componets/ShowPatient_Reception';
import CreatePatient_Receptionist from './componets/CreatePatient_Receptionist';
import EditPatient_Receptionist from './componets/EditPatient_Receptionist';
import './Login.css';



function App() {
  return (
  <div className="App">
    <div className='conte-principal'>
  <BrowserRouter>
  <div className='con-nav'>
    <Link to="/" className='btn btn-danger' id="bt">
    <span class="material-symbols-outlined">
   logout
   </span>&nbsp; login
    </Link>
    <Link to="/DoctorPanel" className='btn btn-danger' id="bt">
    <span class="material-symbols-outlined">
     clinical_notes
      </span>&nbsp;
    DoctorPanel
    </Link>
    <Link to="/resepcion" className='btn btn-danger' id="bt">
    <span class="material-symbols-outlined">person_3</span>&nbsp;resectionpanel</Link>
    
    <Link to="/pacientes" className='btn btn-danger' id="bt"><span class="material-symbols-outlined">person_pin</span> &nbsp; patientsView</Link>
   </div>
   <div className='con-inf'></div>
   
   <Routes>
        <Route>
        <Route path='/Resepcion'element={<Reseption/>}/>
        </Route>
  </Routes>
      
  <Routes>
      <Route path='/DoctorPanel'element={<DoctorPanel/>}/>
      <Route path='/DoctorPanel/patient-update/:id' element={<EditPatient/>}/>

      <Route path='/' element={ <ShowPatient_Receptionist /> } />
      <Route path='/create' element={ <CreatePatient_Receptionist /> } />
      <Route path='/edit/:id' element={ <EditPatient_Receptionist /> } />
      <Route path='/' element={<PatientView/>}/>
      <Route path='/' element={<Login/>}/>
  </Routes>
  
<Routes>
  <Route>
  <Route path='/'element={<Principal/>}/>
  </Route>
</Routes>
</BrowserRouter>
  
  </div> 
      </div>
  );
}

export default App;