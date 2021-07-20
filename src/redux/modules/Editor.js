//action type
const IS_OPENED = 'IS_OPENED';

//action
export const handleEditorOpen = (isOpened) => {
  return {
    type: IS_OPENED,
    isOpened,
  };
};

//initial state
const initialState = {
  isOpened: false,
};

//reducer
const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPENED:
      return {
        ...state,
        isOpened: action.isOpened,
      };

    default:
      return state;
  }
};

export default editorReducer;
