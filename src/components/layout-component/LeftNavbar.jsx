import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

    console.log(categories);

    return (
        <div>
            <h2 className='font-semibold mb-3'>All Categories</h2>
            <div className='border rounded-md shadow-sm p-3'>
                {
                    categories.map(category => <div className='flex flex-col items-left justify-start'>
                    <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn justify-start bg-white rounded-md shadow-sm text-left my-2'>{category.category_name}</NavLink>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;