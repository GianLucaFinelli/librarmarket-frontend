import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-100 navbar bg-secondary border-bottom border-dark py-3">
            <div className="w-100 px-4 d-flex flex-row justify-content-between">
                <h4 className="text-white">User Name</h4>
                <div>
                    <select className="form-control">
                        <option value="profile">Perfil</option>
                        <option value="settings">Configuraciones</option>
                        <option value="signout">Cerrar sesión</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
