import './App.css';
import './css/headerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import DoctorPanel from './componets/DoctorPanel';
import EditPatient from './componets/EditPatient';


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
