import { DECREMENT_COUNT, INCREMENT_COUNT } from "./CountTypes";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
}

