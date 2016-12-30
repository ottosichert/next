import * as types from './types';

const initialState = {
  tabIndex: types.TAB.MAIN,
  tabTransparent: false,
  postIndex: types.POST.MAIN,
  postDisabled: false,
  postAnimateTransitions: true,
  pageIndex: types.PAGE.MAIN,
  pageDisabled: true,
  overlayIndex: types.OVERLAY.MAIN,
  overlayDisabled: false,
  overlayTransparency: 0.0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.CHANGE_TAB_INDEX: {
      const newState = { ...state };

      newState.tabIndex = action.payload;
      newState.tabTransparent = (action.payload === types.TAB.FULL);

      newState.postIndex = types.POST.MAIN;
      newState.postDisabled = (action.payload !== types.TAB.MAIN);
      newState.postAnimateTransitions = true;

      newState.pageIndex = (
        action.payload === types.TAB.UPLOAD ?
        types.PAGE.UPLOAD :
        types.PAGE.MAIN
      );
      newState.pageDisabled = (![types.TAB.INFO, types.TAB.UPLOAD].includes(action.payload));

      newState.overlayIndex = {
        [types.TAB.SHARE]: types.OVERLAY.SHARE,
        [types.TAB.FULL]: types.OVERLAY.FULL,
        [types.TAB.MAIN]: types.OVERLAY.MAIN,
        [types.TAB.INFO]: types.OVERLAY.INFO,
        [types.TAB.UPLOAD]: types.OVERLAY.INFO,
      }[action.payload];
      newState.overlayDisabled = (action.payload === types.TAB.UPLOAD);
      newState.overlayTransparency = (action.payload === types.TAB.INFO ? 1.0 : 0.0);

      return newState;
    }

    case types.CHANGE_POST_INDEX: {
      const newState = { ...state };

      newState.tabIndex = types.TAB.MAIN;
      newState.tabTransparent = false;

      newState.postIndex = action.payload;
      newState.postDisabled = true;
      newState.postAnimateTransitions = true;

      newState.pageIndex = types.PAGE.MAIN;
      newState.pageDisabled = true;

      newState.overlayIndex = types.OVERLAY.MAIN;
      newState.overlayDisabled = true;

      return newState;
    }

    case types.REPLACE_POST: {
      const newState = { ...state };

      newState.tabIndex = types.TAB.MAIN;
      newState.tabTransparent = false;

      newState.postIndex = types.POST.MAIN;
      newState.postDisabled = false;
      newState.postAnimateTransitions = false;

      newState.pageIndex = types.PAGE.MAIN;
      newState.pageDisabled = true;

      newState.overlayIndex = types.OVERLAY.MAIN;
      newState.overlayDisabled = false;

      return newState;
    }

    case types.REPLACE_POST_FINISHED: {
      const newState = { ...state };

      newState.tabIndex = types.TAB.MAIN;
      newState.tabTransparent = false;

      newState.postIndex = types.POST.MAIN;
      newState.postDisabled = false;
      newState.postAnimateTransitions = true;

      newState.pageIndex = types.PAGE.MAIN;
      newState.pageDisabled = true;

      newState.overlayIndex = types.OVERLAY.MAIN;
      newState.overlayDisabled = false;

      return newState;
    }

    case types.CHANGE_PAGE_INDEX: {
      const newState = { ...state };

      newState.tabIndex = (
        action.payload === types.PAGE.UPLOAD ?
        types.TAB.UPLOAD :
        types.TAB.INFO
      );
      newState.tabTransparent = false;

      newState.postIndex = types.POST.MAIN;
      newState.postDisabled = true;
      newState.postAnimateTransitions = true;

      newState.pageIndex = action.payload;
      newState.pageDisabled = false;

      newState.overlayIndex = types.OVERLAY.INFO;
      newState.overlayDisabled = (action.payload === types.PAGE.UPLOAD);

      return newState;
    }

    case types.CHANGE_OVERLAY_INDEX: {
      const newState = { ...state };

      newState.tabIndex = {
        [types.OVERLAY.SHARE]: types.TAB.SHARE,
        [types.OVERLAY.FULL]: types.TAB.FULL,
        [types.OVERLAY.MAIN]: types.TAB.MAIN,
        [types.OVERLAY.INFO]: types.TAB.INFO,
      }[action.payload];
      newState.tabTransparent = (action.payload === types.OVERLAY.FULL);

      newState.postIndex = types.POST.MAIN;
      newState.postDisabled = (action.payload !== types.OVERLAY.MAIN);
      newState.postAnimateTransitions = true;

      newState.pageIndex = types.PAGE.MAIN;
      newState.pageDisabled = (action.payload !== types.OVERLAY.INFO);

      newState.overlayIndex = action.payload;
      newState.overlayDisabled = false;
      newState.overlayTransparency = (action.payload === types.OVERLAY.INFO ? 1.0 : 0.0);

      return newState;
    }

    case types.CHANGE_OVERLAY_TRANSPARENCY: {
      const newState = { ...state };

      if (types.OVERLAY.MAIN < action.payload && action.payload < types.OVERLAY.INFO) {
        newState.overlayTransparency = action.payload - types.OVERLAY.MAIN;
      } else if (action.payload === types.OVERLAY.INFO) {
        newState.overlayTransparency = 1.0;
      } else {
        newState.overlayTransparency = 0.0;
      }

      return newState;
    }

    default: {
      return state;
    }
  }
}
