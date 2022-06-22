import { INCREMENT, DECREMENT } from "../actions/actionsType";

const initialState = { count: 0 };

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: action.count };
    case DECREMENT:
      return { ...state, count: action.count };
    default:
      return { ...state };
  }
}

export { counter };
