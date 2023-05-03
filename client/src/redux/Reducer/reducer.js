import { ALL_CHARACTERS, PREV_PAGE, NEXT_PAGE } from "../Actions/types";

const initialState = {
    numPage: 1,
    allCharacters: [],
  };

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
        return {
            ...state,
            numPage: state.numPage + 1,
        };
        case PREV_PAGE:
        return {
            ...state,
            numPage: state.numPage - 1,
        };

        case ALL_CHARACTERS:
        if (Array.isArray(action.payload)) {
            return {
            ...state, 
            numPage: 1,
            allCharacters: [...action.payload]
            };
        } 
        break;

        default:
           return {...state}
    }
};

export default rootReducer;