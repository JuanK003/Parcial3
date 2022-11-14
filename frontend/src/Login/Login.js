import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/navbarInicio.js';

const CompLogin = () => {
    return(
        <>
            <Navbar></Navbar>
            <div id="contenedor">
                <div id="contenedorcentrado">
                    <div id="login">
                        <form id="loginform">
                            <label for="usuario">Usuario</label>
                            <input id="usuario" type="text" name="usuario" placeholder="Usuario" required/>
                            
                            <label for="password">Contraseña</label>
                            <input id="password" type="password" placeholder="Contraseña" name="password" required/>
                            <Link to='/Admin' type="submit" title="Ingresar" name="Ingresar">LogIn</Link>
                        </form>
                        
                    </div>
                    <div id="derecho">
                        <div class="titulo">
                            Bienvenido
                        </div>
                        <hr></hr>
                        <div class="pie-form">
                            <a href="#">¿Perdiste tu contraseña?</a>
                            <a href="#">¿No tienes Cuenta? Registrate</a>
                            <hr></hr>
                            <a href="#">« Volver</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompLogin