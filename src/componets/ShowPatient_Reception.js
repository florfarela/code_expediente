/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api'

const ShowPatient_Receptionist = () => {
    const [patients, setPatients] = useState([])
    useEffect (() => {
        getAllPatients()
    }, [])

    const getAllPatients = async() => {
        const response = await axios.get(`${endpoint}/patients`)
        setPatients(response.data);
    }

    const deletePatient = async (id) => {
        axios.delete(`${endpoint}/patients/${id}`)
        getAllPatients();
    }

  return (
       <div className='header'>
            <div className="he-one">
                <h3 className='title'>Receptionist Panel</h3>
                <a href="#" className="logout"><span class="material-symbols-outlined">logout</span>  logout</a>
                <div className="logo"></div>
            </div>

            <div className='he-body'>   
            <div className='container'>
                <Link to='/create' className='btn btn-success mt-2 mb-2 float-end text-white' id="crea-boton">Create</Link>
            
                {patients.map((patient) => (
                    <>
                    <br/><br/><br/>
                    <div className="card text-center" key={patient.id} id='card'>        
                <div className="card-header" id='card-header'>Name: {patient.name} 
                            <h6 className='state'>{patient.severity}</h6>
                        </div>
                        <div className="card-header">DUI: {patient.dui} </div>
                        <div className='card-header'>Age: {patient.age} </div>
                        <h6 className='card-header'>Telefono: {patient.phone} </h6>
                        <h6 className='card-header'>Adress: {patient.adress} </h6>
                        
                        <div className='card-body'>
                            <p className='card-text'> {patient.observation} </p>
                        </div>

                        <div className='card-footer text-muted' id='card-foo'>
                            <Link to={`/edit/${patient.id}`} className='botones'>Edit</Link>
                        <button onClick={()=> deletePatient(patient.id)} className='botones'>Delete</button>
                        </div>
                    </div>
                    <br/>
                    </>
                ))}
            </div>    
            <div className='he-footer'>
                
            </div>
        </div>
        </div>
    )
}

export default ShowPatient_Receptionist