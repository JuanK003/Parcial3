import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const URI = 'http://localhost:8000/roles/'

const CompEditRol = () => {
    const [Rol, setRol] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            Rol: Rol,
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setRol(res.data.Rol)
    }

    return (
        <div>
           <h3>Actualizar Rol</h3>
           <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary">ACTUALIZAR</button> { }
            <Link to={`/Admin/`} className='btn btn-warning'><i className="fa-solid fa-rotate-left">    R E G R E S A R</i></Link>
        </form>
    </div>
    )
}
export default CompEditRol