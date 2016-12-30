import * as types from './types';

export function setContentHeight(height) {
  return {
    type: types.SET_CONTENT_HEIGHT,
    payload: height,
  };
}

