import { createAction } from "@reduxjs/toolkit"
import { createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

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

const reducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload.text, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload.id);
    default:
      return [...state];
  }
};

const store = createStore(reducer);

function saveLocalStorage() {
  const state = JSON.stringify(store.getState());
  window.localStorage.setItem("todo", state);
}

store.subscribe(saveLocalStorage);

export default store;
export const actionCreators = {
  addToDo,
  deleteToDo,
}
