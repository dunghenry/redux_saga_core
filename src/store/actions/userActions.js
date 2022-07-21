export const getUsersStart = () => {
    return {
        type: 'GET_USERS_START',
    }
}
export const getUsersSucess = (payload) => {
    return {
        type: 'GET_USERS_SUCCESS',
        payload
    }
}
export const getUsersFailure = () => {
    return {
        type: 'GET_USERS_FAILURE',
    }
}

export const getUserStart = () => {
    return {
        type: 'GET_USER_START',
    }
}
export const getUserSucess = (payload) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload
    }
}
export const getUserFailure = () => {
    return {
        type: 'GET_USER_FAILURE',
    }
}