import { CATEGORIES_ACTION_TYPES } from "./categoryType";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, acton) =>{
    const { type, payload } = acton

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            };
            default:
                return state
    }
}