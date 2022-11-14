import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/tipos_productos/'

const CompCreateTipoProducto = () => {
    const [Tipo, setTipo] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            Tipo: Tipo,
        })
        navigate('/Admin/')
    }   

    return (
        <div>
           <h3>Nuevo Tipo de Producto</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input
                        required
                        value={Tipo}
                        onChange={ (e)=> setTipo(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>  
                 <button type='submit' className='btn btn-success'>CREAR</button>    {  }
                 <Link to={`/Admin/`} className='btn btn-warning'><i className="fa-solid fa-rotate-left">    R E G R E S A R</i></Link>              
           </form>
        </div>
    )
}

export default CompCreateTipoProducto