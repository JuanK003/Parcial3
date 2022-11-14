import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/roles/'

const CompCreateRol = () => {
    const [Rol, setRol] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            Rol: Rol,
        })
        navigate('/Admin/')
    }   

    return (
        <div>
           <h3>Nuevo Rol</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Rol</label>
                    <input
                        required
                        value={Rol}
                        onChange={ (e)=> setRol(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  
                 <button type='submit' className='btn btn-success'>CREAR</button>    {  }
                 <Link to={`/Admin`} className='btn btn-warning'><i className="fa-solid fa-rotate-left">    R E G R E S A R</i></Link>              
           </form>
        </div>
    )
}

export default CompCreateRol