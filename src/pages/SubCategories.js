import React from 'react';
import Layout from '../components/Layout';
import SubCategoryPage from '../components/SubCategoryPage';

const SubCategories = () => {
    return (
        <Layout text="List of all subcategories">
           { <SubCategoryPage/> }
        </Layout>
    )
}

export default SubCategories;