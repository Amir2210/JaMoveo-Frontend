import { userService } from '../../services/user.service'


export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'

const initialState = {
    user: userService.getLoggedinUser(),
    users: [],
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        default:
    }
    return newState
}
