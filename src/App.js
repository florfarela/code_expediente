import './App.css';
import './css/principal.css';
import './css/headerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,Link} from'react-router-dom';
import DoctorPanel from './componets/DoctorPanel';
import EditPatient from './componets/EditPatient';
import PatientView from './componets/PatientView';
import Login from './componets/Login';
import ShowPatient_Receptionist from './componets/ShowPatient_Reception';
import CreatePatient_Receptionist from './componets/CreatePatient_Receptionist';
import EditPatient_Receptionist from './componets/EditPatient_Receptionist';
import './Login.css';

import Reseption from './componets/Reseption';
import Principal from './componets/Principal';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<DoctorPanel/>}/>
      <Route path='/patient-update/:id' element={<EditPatient/>}/>
      <Route/>

     </Routes>
     </BrowserRouter>
      
      
    </div>
  );
}

export default App;
