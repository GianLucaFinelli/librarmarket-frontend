import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
    return (
        <main className="h-100">
            <div className="d-flex flex-column h-100">
                <Navbar/>
                <section className="d-flex px-0 h-100">
                    <Sidebar/>
                    <article className="col col-10 px-3 py-2 bg-dark">
                        { children }
                    </article>
                </section>
            </div>
        </main>
    )
}

export default Layout;
