import axios from "../helpers/axios"
import { authConstants, registerConstants } from "./constants"


export const signup = (user) => {
    console.log(user)
    return async (dispatch) => {
        dispatch({ type: registerConstants.USER_REGISTER_REQUEST })
        const res = await axios.post(`/admin/signup`, {
            ...user
        });
        if (res.status === 201) {
            const { message } = res.data
            dispatch({
                type: registerConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: registerConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }

    }
}