import { useState, useEffect } from 'react';

export const usePagination = ( data, currentPage, perPage ) => {

    const [items, setItems] = useState([]);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handlePages();
        handleItems();
    }, [data])

    useEffect(() => {
        handleItems();
    }, [currentPage])

    const handleItems = () => {
        const end = currentPage * perPage
        const start = end - perPage;
        const newArr = data.filter((item, index) => {
            if (start <= index && index < end) {
                return item;
            }
        });
        setItems(newArr);
        setLoading(false)
    }

    const handlePages = () => {
        const cant = data.length / perPage;
        setPages(cant);
    }

    return {
        items,
        pages,
        loading,
    }
}