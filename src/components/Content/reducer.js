import * as types from './types';
import data from './data';

const initialState = {
  id: 0,
  height: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.SET_CONTENT_HEIGHT: {
      const newState = { ...state };

      newState.height = action.payload;

      return newState;
    }

    case types.CHANGE_CONTENT_ID: {
      const newState = { ...state };

      if (action.payload !== 1) {
        newState.id = (newState.id + (action.payload === 0 ? 1 : 2)) % data.length;
      }

      return newState;
    }

    default: {
      return state;
    }
  }
}
