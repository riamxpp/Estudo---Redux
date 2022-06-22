import { INCREMENT, DECREMENT } from "./actionsType";

export function incrementCounter(count) {
  count++;
  return {
    type: INCREMENT,
    count,
  };
}

export function decrementCounter(count) {
  if (count > 0) count--;
  return {
    type: DECREMENT,
    count,
  };
}
