import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../Redux/Filters/actions';

const Search = () => {
    const dispatch = useDispatch();
    // function debounce(fn, delay,) {
    //     let timeoutId;

    //     return function () {
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //         timeoutId = setTimeout(() => {
    //             fn();
    //         }, delay);
    //     };
    // }
    function debounce (fn,delay){
        let timer ;
        return function (...args) {
            const context = this;
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                timer = null
                fn.apply(context,args)
            }, delay);
        }
    }
    const defineSearchKey = (e) => {
        dispatch(searchByTitle(e.target.value))
    }
    const optimized = useCallback(debounce(defineSearchKey,500),[])
    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={optimized}
            />
            <img
                className="inline h-6 cursor-pointer"
                src="./assets/search.svg"
                alt="Search"
            />
        </div>
    );
};

export default Search;