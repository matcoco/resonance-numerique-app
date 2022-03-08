import { SET_BIRTH_DATE } from "./ActionsType";

export const datas = {
    currentUser: {},
    archives: []
}

export const Reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_BIRTH_DATE:
            return { ...state, currentUser: payload }
        default:
            return state
    }
}