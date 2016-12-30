import * as types from './types';

export function changeTabIndex(index) {
  return {
    type: types.CHANGE_TAB_INDEX,
    payload: index,
  };
}

export function changePostIndex(index) {
  return {
    type: types.CHANGE_POST_INDEX,
    payload: index,
  };
}

export function replacePost() {
  return {
    type: types.REPLACE_POST,
  };
}

export function replacePostFinished() {
  return {
    type: types.REPLACE_POST_FINISHED,
  };
}

export function changePageIndex(index) {
  return {
    type: types.CHANGE_PAGE_INDEX,
    payload: index,
  };
}

export function changeOverlayIndex(index) {
  return {
    type: types.CHANGE_OVERLAY_INDEX,
    payload: index,
  };
}

