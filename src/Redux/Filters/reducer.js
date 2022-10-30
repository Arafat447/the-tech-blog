import { AUTHERSELECTED, CATEGORYSELECTED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORYSELECTED:
            if (state.category === action.payload) {
                return {
                    ...state,
                    category:""
                }
            }
            return {
                ...state,
                category:action.payload
            }
        case AUTHERSELECTED:
            if (state.author === action.payload) {
                return {
                    ...state,
                    author:""
                }
            }
            return {
                ...state,
                author:action.payload
            }




        default:
            return state;
    }
}

export default reducer;