import getDate from '../../utils/getDate';

//action types
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const DELETE_ALL = 'DELETE_ALL';
const UPDATE = 'UPDATE';

//actions
export const createMemo = (title, description) => {
  return {
    type: CREATE,
    payload: { title, description },
  };
};

export const deleteMemo = (id) => {
  return {
    type: DELETE,
    payload: { id },
  };
};

export const deleteAllMemo = () => {
  return {
    type: DELETE_ALL,
  };
};

export const updateMemo = (id, title, description) => {
  return {
    type: UPDATE,
    payload: { id, title, description },
  };
};

//initial state
const initialState = {
  memos: [],
};

//reducer
const memoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE:
      return {
        ...state,
        memos: [
          {
            id: Date.now(),
            createdAt: getDate(),
            title: payload.title,
            description: payload.description,
          },
          ...state.memos,
        ],
      };

    case DELETE:
      return {
        ...state,
        memos: state.memos.filter((item) => item.id !== payload.id),
      };

    case DELETE_ALL:
      return initialState;

    case UPDATE:
      return {
        ...state,
        memos: state.memos.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                title: payload.title,
                description: payload.description,
              }
            : item,
        ),
      };
    default:
      return state;
  }
};

export default memoReducer;
