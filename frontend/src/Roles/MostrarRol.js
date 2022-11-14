import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/roles/'

const CompShowRol = () => {
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Link to="/Admin/rol/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-hospital">    N u e v o</i></Link>
                        <div className='table-responsive'>
                            <table className='table table-hover' id='emp-table'>
                                <thead className='table-active'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Rol</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { blogs.map ( (blog) => (
                                        <tr key={ blog.id}>
                                            <td> {blog.id} </td>
                                            <td> { blog.Rol } </td>
                                            <td>
                                                <Link to={`/Admin/rol/edit${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> {  }
                                                <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button> {  }
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )

}

export default CompShowRol