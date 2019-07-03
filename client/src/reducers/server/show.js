import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'SERVER_SHOW_ERROR':
      return action.error;

    case 'SERVER_SHOW_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'SERVER_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'SERVER_SHOW_LOADING':
      return action.loading;

    case 'SERVER_SHOW_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'SERVER_SHOW_SUCCESS':
    case 'SERVER_SHOW_MERCURE_MESSAGE':
      return action.retrieved;

    case 'SERVER_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'SERVER_SHOW_MERCURE_OPEN':
      return action.eventSource;

    case 'SERVER_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
