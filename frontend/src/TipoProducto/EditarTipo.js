import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const URI = 'http://localhost:8000/tipos_productos/'

const CompEditTipo = () => {
    const [Tipo, setTipo] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            Tipo: Tipo,
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTipo(res.data.Tipo)
    }

    return (
        <div>
           <h3>Actualizar Tipo de Producto</h3>
           <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary">ACTUALIZAR</button> { }
            <Link to={`/Admin/`} className='btn btn-warning'><i className="fa-solid fa-rotate-left">    R E G R E S A R</i></Link>
        </form>
    </div>
    )
}
export default CompEditTipo