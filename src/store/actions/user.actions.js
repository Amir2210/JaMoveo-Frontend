import { userService } from '../../services/user.service.js';
import { socketService, SOCKET_EMIT_ADMIN_SET_SONG } from '../../services/socket.service.js';
import { store } from '../store.js';

import { LOADING_DONE, LOADING_START, SET_SONG } from "../reducers/system.reducer.js";
import { SET_USER, SET_USERS, } from "../reducers/user.reducer.js";

export async function loadUsers() {
    try {
        store.dispatch({ type: LOADING_START })
        const users = await userService.getUsers()
        store.dispatch({ type: SET_USERS, users })
    } catch (err) {
        console.log('UserActions: err in loadUsers', err)
    } finally {
        store.dispatch({ type: LOADING_DONE })
    }
}



export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({
            type: SET_USER,
            user
        })
        socketService.login(user._id)
        return user
    } catch (err) {
        console.log('Cannot login', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({
            type: SET_USER,
            user
        })
        socketService.login(user._id)
        return user
    } catch (err) {
        console.log('Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({
            type: SET_USER,
            user: null
        })
        socketService.logout()
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}

export async function setSong(song) {
    try {
        store.dispatch({
            type: SET_SONG,
            song
        })
        socketService.emit(SOCKET_EMIT_ADMIN_SET_SONG, song)
    } catch (error) {
        console.log('cannot set song')
        throw err
    }
}

export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId);
    } catch (err) {
        showErrorMsg('Cannot load user')
        console.log('Cannot load user', err)
    }
}