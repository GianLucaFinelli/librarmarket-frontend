import React from 'react';
import Layout from '../components/Layout';
import ProductsPage from '../components/ProductsPage';

const Products = () => {
    return (
        <Layout text="List of all products">
            <ProductsPage/>
        </Layout>
    )
}

export default Products;
