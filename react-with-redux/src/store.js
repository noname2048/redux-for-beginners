import { configureStore, createSlice } from "@reduxjs/toolkit"

// import { createStore } from "redux";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

function loadLocalStorage() {
  const cache = window.localStorage.getItem("todo")
  let state = [];
  if (cache !== null) {
    state = JSON.parse(cache);
  }
  console.log(state)
  const ret = state;
  return ret;
}

const initState = loadLocalStorage();

// const reducer = (state = initState, action) => {
//   console.log(action)
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload.text, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload.id);
//     default:
//       return [...state];
//   }
// };

// const reducer = createReducer(initState, {
//   [addToDo]: (state, action) => {
//     state.unshift({text: action.payload.text, id: Date.now()})  // mutate (don't return)
//   },
//   [deleteToDo]: (state, action) => 
//     state.filter(toDo => toDo.id !== action.payload.id)  // return state: it should be new state!
//   ,
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.unshift({text: action.payload.text, id: Date.now()})
    },
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload.id)
  }
})

// const store = createStore(reducer);
const store = configureStore({reducer: toDos.reducer})

function saveLocalStorage() {
  const state = JSON.stringify(store.getState());
  window.localStorage.setItem("todo", state);
}

store.subscribe(saveLocalStorage);

export default store;

export const actionCreators = {
  addToDo: toDos.actions.add,
  deleteToDo: toDos.actions.remove,
}

export const { add, remove } = toDos.actions;
