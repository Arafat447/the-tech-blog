import { AUTHERSELECTED, CATEGORYSELECTED, SEARCHTITLE } from "./actionTypes"

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
export const searchByTitle = (searchKey) => {
    return {
        type:SEARCHTITLE,
        payload:searchKey
    }
}