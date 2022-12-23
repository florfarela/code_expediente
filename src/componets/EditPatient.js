

import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/patients/'

const EditPatient = () => {
    const [dui, setDui] = useState('')
    const [name, setName] = useState('')
    const [ age, setAge] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [admitted, setAdmitted] = useState('')
    const [idArea, setIdArea] = useState('')
    const [observations, setObservations] = useState('')
    const [severity, setSeverity] = useState('')
    const [idDoctor, setIdDortor] = useState('')
    const [idRoles, setIdRoles] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
          dui: dui,
          name: name,
          age: age,
          adress: adress,
          phone: phone,
          diagnosis : diagnosis,
          admitted : admitted,
          idArea : idArea,
          observations : observations,
          severity : severity,
          idDoctor: idDoctor,
          idRoles: idRoles,
          password: password,
        })
        navigate('/DoctorPanel')
    }

    useEffect( () =>{
        const getPatientById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
           // console.log(response)
            setDui(response.data.dui)
            setName(response.data.name)
            setAge(response.data.age)
           setAdress(response.data.adress)
            setPhone(response.data.phone)
            setDiagnosis(response.data.diagnosis)
            setAdmitted(response.data.admitted)
            setIdArea(response.data.idArea)
            setObservations(response.data.observations)
            setSeverity(response.data.severity)
            setIdDortor(response.data.idDoctor)
            setIdRoles(response.data.idRoles)
            setPassword(response.data.password)
            
        }
        getPatientById()
        
    }, [id])

    return (
       <div className="htm">
         <h3 className="titulo-name">Edit Patient</h3>
        <div className="container" id="conta-form">
         <center>
            <form onSubmit={update}>
            <div className="container-boton">
           <button type='submit' className='btn btn-primary' id='bto'>
           <span class="material-symbols-outlined">upgrade</span>
             Update</button>
           </div>
           <br/>
                <div className='mb-3'>
                    <label className='form-label'>Dui</label>
                    <input 
                        value={dui}
                        onChange={ (e)=> setDui(e.target.value)}
                        type='number'
                        className='form-control'
                        id="form"
                        
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Edad</label>
                    <input
                        value={age}
                        onChange={ (e)=> setAge(e.target.value)}
                        type='number'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Adress</label>
                    <input
                        value={adress}
                        onChange={ (e)=> setAdress(e.target.value)}
                        type='text'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Phone</label>
                    <input
                        value={phone}
                        onChange={ (e)=> setPhone(e.target.value)}
                        type='number'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Diagnosis</label>
                    <input
                        value={diagnosis}
                        onChange={ (e)=> setDiagnosis(e.target.value)}
                        type='text'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Admitted</label>
                    <input
                        value={admitted}
                        onChange={ (e)=> setAdmitted(e.target.value)}
                        type='text'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <input
                        value={idArea}
                        onChange={ (e)=> setIdArea(e.target.value)}
                        type='hidden'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Observations</label>
                    <br/>
                    <textarea value={observations} 
                     onChange={ (e)=> setObservations(e.target.value)} 
                     type='text'
                     rows="5" cols="35"
                     id="form">
                     </textarea>
                   
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Severity</label>
                    <input
                        value={severity}
                        onChange={ (e)=> setSeverity(e.target.value)}
                        type='text'
                        className='form-control'
                        id="form"
                    />
                </div>

                <div className='mb-3'>
                    <input
                        value={idDoctor}
                        onChange={ (e)=> setIdDortor(e.target.value)}
                        type='hidden'
                        className='form-control'
                        id="form"
                    />
                </div>
                
                <div className='mb-3'>
                    <input
                        value={idRoles}
                        onChange={ (e)=> setIdRoles(e.target.value)}
                        type='hidden'
                        className='form-control'
                        id="form"
                    />
                </div>
                <div className='mb-3'>
                    <input
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value)}
                        type='hidden'
                        className='form-control'
                        id="form"
                    />
                </div>
                
            </form>
            
            </center>
        </div>
        <h3 className="titulo-name"></h3>
        </div>
    )
}

export default EditPatient