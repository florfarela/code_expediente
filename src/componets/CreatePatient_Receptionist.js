import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/patients'
const CreatePatient_Receptionist = () => {

  const [dui, setDui] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [admitted, setAdmitted] = useState('');
  const [idArea, setIdArea] = useState('');
  const [observation, setObservation] = useState('');
  const [severity, setSeverity] = useState('');
  const [idDoctor, setIdDoctor] = useState('');
  const [idRoles, setIdRoles] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {dui: dui, 
                                name: name,
                                age: age,
                                adress: adress, 
                                phone: phone, 
                                diagnosis: diagnosis,
                                admitted: admitted,
                                idArea: idArea,
                                observation: observation,
                                severity: severity,
                                idDoctor: idDoctor,
                                idRoles: idRoles,
                                password: password
                              })
    navigate('/showReceptionist')
  }

  return (
  <div>
  <div className='header'>
  <h3 className='titulo-name'>Create Patient</h3>
  <div className='logo'></div>
  </div>
  <div className='body'>
  <div className='container' id='conta-form'>
  <form onSubmit={store} className='mt-2'>
  <div className='mb-3'>
  <label className='form-label'>Dui</label>
  <input value={dui} onChange={(e)=> setDui(e.target.value)} type="number" className='form-control'/>
  </div>
  <div className='mb-3'>
  <label className='form-label'>Name</label>
  <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className='form-control'/>
  </div>
  <div className='mb-3'>
  <label className='form-label'>Age</label>
  <input value={age} onChange={(e)=> setAge(e.target.value)} type="number" className='form-control'/>
  </div>
  <div className='mb-3'>
   <label className='form-label'>Adress</label>
  <input value={adress} onChange={(e)=> setAdress(e.target.value)} type="text" className='form-control'/>
  </div>
  <div className='mb-3'>
    <label className='form-label'>Phone</label>
    <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="number" className='form-control'/>
    </div>
    <div className='mb-3'>
    <input value={diagnosis} onChange={(e)=> setDiagnosis(e.target.value)} type="hidden" className='form-control'/>
    </div>
    <div className='mb-3'>
    <input value={admitted} onChange={(e)=> setAdmitted(e.target.value)} type="hidden" className='form-control'/>
          </div>
         <div className='mb-3'>
        <input value={observation} onChange={(e)=> setObservation(e.target.value)} type="hidden" className='form-control'/>
          </div>
          <div className='mb-3'>
         <input value={severity} onChange={(e)=> setSeverity(e.target.value)} type="hidden" className='form-control'/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>IdArea</label>
 <input value={idArea} onChange={(e)=> setIdArea(e.target.value)} type="text" className='form-control'/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>IdDoctor</label>
         <input value={idDoctor} onChange={(e)=> setIdDoctor(e.target.value)} type="text" className='form-control'/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>IdRoles</label>
            <input value={idRoles} onChange={(e)=> setIdRoles(e.target.value)} type="text" className='form-control'/>
          </div>
          <div className='mb-3r'>
            <label className='form-label'>Password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="text" className='form-control'/>
          </div>
          <button type='submit' className='btn btn-primary' id='bto'>
          <span class="material-symbols-outlined">upgrade</span>
            Save</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default CreatePatient_Receptionist