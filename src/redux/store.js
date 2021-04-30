import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

// //action types
// const CREATE = 'CREATE';
// const DELETE = 'DELETE';
// const UPDATE = 'UPDATE';
// const EDITOR_OPEN_CLOSE = 'EDITOR_OPEN_CLOSE';

// //actions
// export const createMemo = (inputData) => {
//   const { title, description } = inputData;
//   return {
//     type: CREATE,
//     inputData: { title, description },
//   };
// };

// export const deleteMemo = (inputData) => {
//   const { id } = inputData;
//   return {
//     type: DELETE,
//     inputData: {
//       id,
//     },
//   };
// };

// export const updateMemo = (inputData) => {
//   const { id, title, description } = inputData;
//   return {
//     type: UPDATE,
//     inputData: { id, title, description },
//   };
// };

// export const editorHandler = (isOpened) => {
//   return {
//     type: EDITOR_OPEN_CLOSE,
//     isOpened,
//   };
// };

// const initialState = {
//   isOpened: false,
//   inputData: [
//     {
//       id: 123456,
//       createdAt: '2021-01-01 13:13:13',
//       title: '테스트 메모 제목',
//       description: '테스트 메모 내용',
//     },
//   ],
// };

// const reducer = (state = initialState, action) => {
//   const { inputData } = state;
//   switch (action.type) {
//     case CREATE:
//       return {
//         ...state,
//         inputData: inputData.concat({
//           ...action.inputData,
//           id: Date.now(),
//           createdAt: getDate(),
//         }),
//       };

//     case DELETE:
//       return inputData.filter((item) => item.id !== action.id);

//     case UPDATE:
//       return state;

//     case EDITOR_OPEN_CLOSE:
//       return {
//         ...state,
//         isOpened: action.isOpened,
//       };
//     default:
//       return state;
//   }
// };

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export default store;
