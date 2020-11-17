import axios from "../helpers/axios"
import { categoryConstants } from './constants'

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST })
        try {
            const res = await axios.get('category/getcategory')
            if (res.status === 201) { //should be 200 for some reason

                const { categoryList } = res.data;
                console.log(res.data)
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories: categoryList }
                })
            } else {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        } catch (error) {
            // const { } = error.response
            console.log(error.response)
        }

    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST })
        const res = await axios.post('/category/create', form)
        if (res.status === 201) {
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload: { category: res.data.category }
            })
        } else {
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            })
        }
        console.log(res)
    }
}