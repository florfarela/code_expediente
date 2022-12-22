import './App.css';
import './css/headerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import DoctorPanel from './componets/DoctorPanel';
import EditPatient from './componets/EditPatient';
import PatientView from './componets/PatientView';
import Login from './componets/Login';
import ShowPatient_Receptionist from './componets/ShowPatient_Reception';
import CreatePatient_Receptionist from './componets/CreatePatient_Receptionist';
import EditPatient_Receptionist from './componets/EditPatient_Receptionist';
import './Login.css';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<Login/>}/>
      <Route path='/' element={<DoctorPanel/>}/>
      <Route path='/patient-update/:id' element={<EditPatient/>}/>
      <Route path='/' element={<PatientView/>}/> */}
      <Route path='/' element={ <ShowPatient_Receptionist /> } />
      <Route path='/create' element={ <CreatePatient_Receptionist /> } />
      <Route path='/edit/:id' element={ <EditPatient_Receptionist /> } />
      <Route/>

     </Routes>
     </BrowserRouter>
      
      
    </div>
  );
}

export default App;
