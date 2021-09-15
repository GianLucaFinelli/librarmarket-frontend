import React from 'react';

const Sidebar = () => {
    return (
        <aside className="col col-2 bg-dark border-end border-dark">
            <div className="container px-4 h-100 d-flex flex-column justify-content-center">
                <ul className="d-flex flex-column list-none">
                    <li className="text-white fs-4 py-2">Productos</li>
                    <li className="text-white fs-4 py-2">Categorias</li>
                    <li className="text-white fs-4 py-2">Proveedores</li>
                    <li className="text-white fs-4 py-2">Comprobantes</li>
                    <li className="text-white fs-4 py-2">Informes</li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;
