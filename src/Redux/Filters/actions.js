import { AUTHERSELECTED, CATEGORYSELECTED } from "./actionTypes"

export const authorSelect = (author) => {
    return {
        type:AUTHERSELECTED,
        payload:author
    }
}
export const categorySelect = (category) => {
    return {
        type:CATEGORYSELECTED,
        payload:category
    }
}