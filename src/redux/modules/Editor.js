//action type
const OPEN_CLOSE = 'OPEN_CLOSE';

//action
export const handleEditorOpen = (isOpened) => {
  return {
    type: OPEN_CLOSE,
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
    case OPEN_CLOSE:
      return {
        ...state,
        isOpened: action.isOpened,
      };

    default:
      return state;
  }
};

export default editorReducer;
