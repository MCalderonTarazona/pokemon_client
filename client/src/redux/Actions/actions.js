import { ALL_CHARACTERS, PREV_PAGE, NEXT_PAGE, FILTER, ORDER, GROUP } from "./types";

export function prevPage() {
    return {
      type: PREV_PAGE,
    };
}

export function nextPage() {
    return {
      type: NEXT_PAGE,
    };
}
  
export function allCharacters(characters) {
    return {
      type: ALL_CHARACTERS,
      payload: characters,
    };
}

export const filter = (types) => {
    return (
        {type: FILTER, payload: types}
    )
}

export const order = (order) => {
    return (
        {type: ORDER, payload: order}
    )
}

export const group = (group) => {
    return (
        {type: GROUP, payload: group}
    )
}