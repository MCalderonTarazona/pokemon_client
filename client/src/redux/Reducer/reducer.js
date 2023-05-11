import { ALL_CHARACTERS, PREV_PAGE, NEXT_PAGE, FILTER, ORDER, GROUP, SOURCE } from "../Actions/types";

const initialState = {
    numPage: 1,
    viewCharacters: [],
    queryCharacters: [],
    filterTypes: [],
    filterGroup: "id",
    filterOrder: "A",
    filterSource: "all",
    text: ""
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
        case SOURCE:
        let newSource = [];
        if(action.payload === 'api'){
            newSource = state.queryCharacters.filter(element => element.id < 20000);
            console.log(newSource); 
        }
        else if(action.payload === 'db'){
            newSource = state.queryCharacters.filter(element => element.id >= 20000);
            console.log(newSource);
        }else{
            newSource = state.queryCharacters;
            console.log(newSource);
        }

        let newFilterSource = []
        if(state.filterTypes.length === 0){
            newFilterSource = newSource;
        } else {
            newFilterSource = newSource.filter((data) => {
                return state.filterTypes.some((element) => data.types.includes(element));
            });
        }

        const newGroupSource = newFilterSource.sort((a, b) => {
            if (typeof a[state.filterGroup] === "number") {
                  return a[state.filterGroup] - b[state.filterGroup];
            } else if (typeof a[state.filterGroup] === "string") {
                  return a[state.filterGroup].localeCompare(b[state.filterGroup]);
            }
        });

        return {
            ...state,
            filterSource: action.payload,
            viewCharacters: newGroupSource
        };
        case FILTER:
        const newFilter = state.queryCharacters.filter((data) => {
            return action.payload.some((element) => data.types.includes(element));
        });
            
        return {
            ...state,
            viewCharacters: newFilter.length === 0 ? state.queryCharacters : newFilter,
            filterTypes: action.payload
        }
        case GROUP:
        const newGroup = state.queryCharacters.sort((a, b) => {
            if (typeof a[action.payload] === "number") {
                  return a[action.payload] - b[action.payload];
            } else if (typeof a[action.payload] === "string") {
                  return a[action.payload].localeCompare(b[action.payload]);
            }
        });
        return {
            ...state,
            viewCharacters: newGroup,
            filterGroup: action.payload
        }
        case ORDER:
            let newOrder = [];
            if (action.payload === "A") {
                newOrder = state.viewCharacters.sort((a, b) => {
                    if (typeof a[state.filterGroup] === "number") {
                      return a[state.filterGroup] - b[state.filterGroup];
                    } else if (typeof a[state.filterGroup] === "string") {
                      return a[state.filterGroup].localeCompare(b[state.filterGroup]);
                    }
                });
            } else {
                newOrder = state.viewCharacters.sort((a, b) => {
                    if (typeof a[state.filterGroup] === "number") {
                      return b[state.filterGroup] - a[state.filterGroup];
                    } else if (typeof a[state.filterGroup] === "string") {
                      return b[state.filterGroup].localeCompare(a[state.filterGroup]);
                    }
                });
            }
            return {
                ...state,
                viewCharacters: newOrder,
                filterOrder: action.payload
        } 
        case ALL_CHARACTERS:
            return {
            ...state, 
            numPage: 1,
            queryCharacters: [...action.payload.data],
            viewCharacters: [...action.payload.data],
            text: action.payload.text
            };
        break;

        default:
           return {...state}
    }
};

export default rootReducer;