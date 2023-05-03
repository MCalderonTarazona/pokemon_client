import { ALL_CHARACTERS, PREV_PAGE, NEXT_PAGE } from "./types";

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
    console.log(characters);
    return {
      type: ALL_CHARACTERS,
      payload: characters,
    };
}