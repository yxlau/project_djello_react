import * as Actions from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  error: {},
  id: null,
  name: null,
  users: {}

}

function user(state = initialState, action) {
  const data = action.data
  switch (action.type) {
    case Actions.GET_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        ...action.data
      }
    case Actions.GET_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
      }
    case Actions.GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        ...action.data
      }
    case Actions.GET_BOARD_SUCCESS:
      return {
        ...state,
        users: data.users
      }
    default:
      return state
  }

}

export default user