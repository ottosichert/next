import * as types from './types';

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

    default: {
      return state;
    }
  }
}
