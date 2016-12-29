import * as types from './types';

const initialState = {
  tab: {
    index: types.TAB.MAIN,
    transparent: false,
  },
  post: {
    index: types.POST.MAIN,
    disabled: false,
    animateTransitions: true,
  },
  page: {
    index: types.PAGE.MAIN,
    disabled: true,
  },
  overlay: {
    index: types.OVERLAY.MAIN,
    disabled: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.CHANGE_TAB_INDEX: {
      const newState = { ...state };

      newState.tab.index = action.payload;
      newState.tab.transparent = (action.payload === types.TAB.FULL);

      newState.post.index = types.POST.MAIN;
      newState.post.disabled = (action.payload !== types.TAB.MAIN);
      newState.post.animateTransitions = true;

      newState.page.index = (
        action.payload === types.TAB.UPLOAD ?
        types.PAGE.UPLOAD :
        types.PAGE.MAIN
      );
      newState.page.disabled = (![types.TAB.INFO, types.TAB.UPLOAD].includes(action.payload));

      newState.overlay.index = {
        [types.TAB.SHARE]: types.OVERLAY.SHARE,
        [types.TAB.FULL]: types.OVERLAY.FULL,
        [types.TAB.MAIN]: types.OVERLAY.MAIN,
        [types.TAB.INFO]: types.OVERLAY.INFO,
        [types.TAB.UPLOAD]: types.OVERLAY.INFO,
      }[action.payload];
      newState.overlay.disabled = (action.payload === types.TAB.UPLOAD);

      return newState;
    }

    case types.CHANGE_POST_INDEX: {
      const newState = { ...state };

      newState.tab.index = types.TAB.MAIN;
      newState.tab.transparent = false;

      newState.post.index = action.payload;
      newState.post.disabled = true;
      newState.post.animateTransitions = true;

      newState.page.index = types.PAGE.MAIN;
      newState.page.disabled = true;

      newState.overlay.index = types.OVERLAY.MAIN;
      newState.overlay.disabled = true;

      return newState;
    }

    case types.REPLACE_POST: {
      const newState = { ...state };

      newState.tab.index = types.TAB.MAIN;
      newState.tab.transparent = false;

      newState.post.index = types.POST.MAIN;
      newState.post.disabled = false;
      newState.post.animateTransitions = false;

      newState.page.index = types.PAGE.MAIN;
      newState.page.disabled = true;

      newState.overlay.index = types.OVERLAY.MAIN;
      newState.overlay.disabled = false;

      return newState;
    }

    case types.REPLACE_POST_FINISHED: {
      const newState = { ...state };

      newState.tab.index = types.TAB.MAIN;
      newState.tab.transparent = false;

      newState.post.index = types.POST.MAIN;
      newState.post.disabled = false;
      newState.post.animateTransitions = true;

      newState.page.index = types.PAGE.MAIN;
      newState.page.disabled = true;

      newState.overlay.index = types.OVERLAY.MAIN;
      newState.overlay.disabled = false;

      return newState;
    }

    case types.CHANGE_PAGE_INDEX: {
      const newState = { ...state };

      newState.tab.index = (
        action.payload === types.PAGE.UPLOAD ?
        types.TAB.UPLOAD :
        types.TAB.INFO
      );
      newState.tab.transparent = false;

      newState.post.index = types.POST.MAIN;
      newState.post.disabled = true;
      newState.post.animateTransitions = true;

      newState.page.index = action.payload;
      newState.page.disabled = false;

      newState.overlay.index = types.OVERLAY.INFO;
      newState.overlay.disabled = (action.payload === types.PAGE.UPLOAD);

      return newState;
    }

    case types.CHANGE_OVERLAY_INDEX: {
      const newState = { ...state };

      newState.tab.index = {
        [types.OVERLAY.SHARE]: types.TAB.SHARE,
        [types.OVERLAY.FULL]: types.TAB.FULL,
        [types.OVERLAY.MAIN]: types.TAB.MAIN,
        [types.OVERLAY.INFO]: types.TAB.INFO,
      }[action.payload];
      newState.tab.transparent = (action.payload === types.OVERLAY.FULL);

      newState.post.index = types.POST.MAIN;
      newState.post.disabled = (action.payload !== types.OVERLAY.MAIN);
      newState.post.animateTransitions = true;

      newState.page.index = types.PAGE.MAIN;
      newState.page.disabled = (action.payload !== types.OVERLAY.INFO);

      newState.overlay.index = action.payload;
      newState.overlay.disabled = false;

      return newState;
    }

    default: {
      return state;
    }
  }
}
