// authReducer.ts
import { AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/actionTypes';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: action.payload.error,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
