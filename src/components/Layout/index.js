import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
    return (
        <main className="h-100">
            <div className="row h-100">
                <Sidebar/>
                <section className="col col-10 px-0">
                    <Navbar/>
                    <article className="container px-3 py-2">
                        { children }
                    </article>
                </section>
            </div>
        </main>
    )
}

export default Layout;
