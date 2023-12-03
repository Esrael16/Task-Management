// authActions.ts
import { Dispatch } from 'redux';
import { AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';

// Asynchronous action using redux-thunk
export const login = (username: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    // Here, you would typically make a request to your server for authentication.
    // For this example, let's assume a successful login.
    const isAuthenticated = await authenticateUser(username, password);

    if (isAuthenticated) {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: { error: 'Authentication failed' } });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: { error: 'Authentication failed' } });
  }
};

// Simulate an actual authentication function
const authenticateUser = async (username: string, password: string): Promise<boolean> => {
  // Simulate an API call or some authentication logic
  return new Promise((resolve) => {
    // Simulate a delay for the asynchronous operation
    setTimeout(() => {
      // For the example, let's assume the authentication is successful if the password is not empty
      resolve(password !== '');
    }, 1000);
  });
};

