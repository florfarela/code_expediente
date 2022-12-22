import React,{useEffect,useState} from "react";

import axios from "axios";
import {Link}from 'react-router-dom'
const DoctorPanel = () => {
const endpoint = 'http://127.0.0.1:8000/api';
//ruta donde vamos a traer nuestro endpoint
//asignamos un estado
const [ patients, setPatients] = useState([])
useEffect(() => {
getAllPatients()
}, [])

      const getAllPatients = async() => {
      const response = await axios.get(`${endpoint}/patients`)
      setPatients(response.data)
      }
      
return (
    <div className="header">
        <div className="he-one">
          <h3 className="title"> View Patient </h3>
          <a href="#" className="logout"><span class="material-symbols-outlined">logout</span>  logout</a>
          <div className="logo"></div>
        </div>
        <div className="he-body">
          <div className="container">
            {patients.map((patient)=>(
             <div class="card text-center" key={patient.id} id='card'>
             <div class="card-header" id="card-header">Patient Name : {patient.name}
             <h6 className="state">{patient.severity}</h6>
             </div>
             <div class="card-header"> Patient Dui : {patient.dui}</div>
             <div class="card-header"> Patient Age : {patient.age} Años</div>
             <div class="card-header"> Patient Adress : {patient.adress}</div>
             <div class="card-header"> Patient Phone : {patient.phone}</div>
             <div class="card-header"> Patient Diagnosis : {patient.diagnosis}</div>
             <div class="card-header"> Patient Admitted : {patient.admitted}</div>
             <div class="card-header"> Patient Observations : {patient.observations}</div>
            <div class="card-body">
            </div>
            {/* <div class="card-footer text-muted" id="card-foo">
            <Link to={`patient-update/${patient.id}`} className="boton">Edit Patient</Link>
            </div> */}
            </div>
            ))}
          
         </div>
          
        </div>
        <div className="he-footer">
          
         
        </div>

        
      
    </div>
    
    )
}
export default DoctorPanel;
