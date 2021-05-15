import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return { type: ADD, text };
};

const deleteToDo = (id) => {
  return { type: DELETE, id: parseInt(id) };
};

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
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
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
