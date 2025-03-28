import io from 'socket.io-client'
import { userService } from './user.service'


export const SOCKET_EMIT_ADMIN_SET_SONG = 'admin-set-song'
export const SOCKET_EVENT_ADMIN_CHOOSE_SONG = 'admin-choose-song'

export const SOCKET_EMIT_ADMIN_SEARCH_FOR_NEW_SONG = 'admin-search-for-new-song'
export const SOCKET_EVENT_ADMIN_SEARCH_PICK_NEW_SONG = 'admin-pick-new-song'

export const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

// for debugging from console
window.socketService = socketService

socketService.setup()


function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl)
      const user = userService.getLoggedinUser()
      if (user) this.login(user._id)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
    login(userId) {
      socket.emit(SOCKET_EMIT_LOGIN, userId)
    },
    logout() {
      socket.emit(SOCKET_EMIT_LOGOUT)
    },
    terminate() {
      socket = null
    },

  }
  return socketService
}

