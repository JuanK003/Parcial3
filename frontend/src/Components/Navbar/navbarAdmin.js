import React from 'react'

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/Admin">Administrador</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/Admin/rol/">Roles</a>
                <a class="nav-item nav-link active" href="/Admin/empleado/">Empleados</a>
                <a class="nav-item nav-link active" href="/Admin/tipo/">Tipos de Productos</a>
                <a class="nav-item nav-link active" href="/Admin/producto/">Productos</a>
                <a class="nav-item nav-link active" href="/Admin/venta/">Ventas</a>
                <a class="nav-item nav-link active" className='btn btn-danger' href="/">Salir</a>
            </div>
        </div>
    </nav>
  )
}
