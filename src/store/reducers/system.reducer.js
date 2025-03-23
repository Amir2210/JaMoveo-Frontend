export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_SONG = 'SET_SONG'

const initialState = {
  isLoading: false,
  songSelected: {}
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_SONG:
      return { ...state, songSelected: action.song }
    default: return state
  }
}
