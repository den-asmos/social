import { ACTION_TYPES } from '../actions/types';

const initalState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LOGIN_SUCCESS: {
      localStorage.setItem('access', payload.access);

      return {
        ...state,
        access: payload.access,
        refresh: payload.refresh,
        isAuthenticated: true,
        user: null,
        error: null,
      };
    }

    case ACTION_TYPES.LOAD_USER: {
      return { ...state, user: payload };
    }

    case ACTION_TYPES.LOGIN_FAIL:
    case ACTION_TYPES.SIGNUP_FAIL:
    case ACTION_TYPES.LOGOUT: {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');

      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    }

    case ACTION_TYPES.SIGNUP_SUCCESS: {
      return { ...state, isAuthenticated: false, error: null };
    }

    case ACTION_TYPES.AUTHENTICATED_SUCCESS: {
      return { ...state, isAuthenticated: true, error: null };
    }

    case ACTION_TYPES.AUTHENTICATED_FAIL: {
      return { ...state, isAuthenticated: false };
    }

    case ACTION_TYPES.PASSWORD_RESET_SUCCESS:
    case ACTION_TYPES.PASSWORD_RESET_FAIL:
    case ACTION_TYPES.PASSWORD_RESET_CONFIRM_SUCCESS:
    case ACTION_TYPES.PASSWORD_RESET_CONFIRM_FAIL:
    case ACTION_TYPES.ACTIVATION_SUCCESS:
    case ACTION_TYPES.ACTIVATION_FAIL: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
