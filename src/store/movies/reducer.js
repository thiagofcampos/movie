const INITIAL_STATE = {
    movieList: ""
}

export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_MOVIES_REQUEST":
                return {
                    ...state,
                    movieList:action.payload
                }
        default:
            return state;
    }
}