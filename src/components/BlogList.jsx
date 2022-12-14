import React from 'react';
import { useSelector } from 'react-redux';
import Blog from './Blog';

const BlogList = () => {
    const blogList = useSelector(state => state.posts);
    const category = useSelector(state => state.category);
    const author = useSelector(state => state.author);
    const searchKey = useSelector(state => state.searchKey);
    console.log(searchKey,"d")
    const filterByCategory = (blog)=> {
        if(category){
            return blog.category===category
        }
        return true
    }
    const filterByAuthor = (blog) => {
        if(author){
            return blog.author === author
        }
        return true
    }
    
    const filterBySearchKey = (blog)=>{
        if(searchKey){
            return blog.title.toLowerCase().includes(searchKey.toLowerCase())
        }
        return true
    }
    return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {
                        blogList
                        .filter(filterByCategory )
                        .filter(filterByAuthor)
                        .filter(filterBySearchKey)
                        .map(blog => <Blog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogList;