import React from 'react';
import { useDispatch } from 'react-redux';
import { authorSelect, categorySelect } from '../Redux/Filters/actions';

const Blog = ({blog}) => {
    const {title,category,author,date,postImg,authorImg,timeToRead} = blog;
    const dispatch = useDispatch();
    const handleCategoryChange = (category) => {
        dispatch(categorySelect(category))
    }
    const handleAuthorChange = (author) => {
        dispatch(authorSelect(author))
    }
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={postImg}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p onClick={()=>handleCategoryChange(category)} className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={authorImg}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                        onClick={()=>handleAuthorChange(author)}
                            className="text-sm font-medium text-gray-900 hover:underline"
                        >
                            {author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time datetime="2020-03-16"
                            >{date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {timeToRead} min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;