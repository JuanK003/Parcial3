import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/empleados/'

const CompCreateEmpleado = () => {
    const [Nombre, setNombre] = useState('')
    const [Edad, setEdad] = useState('')
    const [Email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [IdRol, setIdRol] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            Nombre: Nombre,
            Edad: Edad,
            Email: Email,
            Username: Username,
            Password: Password,
            IdRol: IdRol
        })
        navigate('/Admin')
    }   

    return (
        <div>
           <h3>Nuevo Empleado</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        required
                        value={Nombre}
                        onChange={ (e)=> setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>Edad</label>
                     <input
                        required
                        value={Edad}
                        onChange={ (e)=> setEdad(e.target.value)} 
                        type="number"
                        className='form-control'
                    />            
                 </div> 

                 <div className='mb-3'>
                     <label className='form-label'>Correo Electrónico</label>
                     <input
                        required
                        value={Email}
                        onChange={ (e)=> setEmail(e.target.value)} 
                        type="email"
                        className='form-control'
                    />            
                 </div> 

                 <div className='mb-3'>
                     <label className='form-label'>Username</label>
                     <input
                        required
                        value={Username}
                        onChange={ (e)=> setUsername(e.target.value)} 
                        type="text"
                        className='form-control'
                    />           
                 </div>

                 <div className='mb-3'>
                     <label className='form-label'>Contraseña</label>
                     <input
                        required
                        value={Password}
                        onChange={ (e)=> setPassword(e.target.value)} 
                        type="password"
                        className='form-control'
                    />           
                 </div>

                 <div className='mb-3'>
                     <label className='form-label'>Rol</label>
                     <input
                        required
                        value={IdRol}
                        onChange={ (e)=> setIdRol(e.target.value)} 
                        type="date"
                        className='form-control'
                    />           
                 </div> 
                 <button type='submit' className='btn btn-success'>CREAR</button>    {  }
                 <Link to={`/Admin/`} className='btn btn-warning'><i className="fa-solid fa-rotate-left">    R E G R E S A R</i></Link>              
           </form>
        </div>
    )
}

export default CompCreateEmpleado