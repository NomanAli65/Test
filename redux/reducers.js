import constants from "./constants";

const initialState = {
    users: [],
    loading: true,
    snackbar: false,
    errorMessage: '',
    modalLoading: false,
    modal: false,
    selectedItem: {},
    value: ""
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_USERS:
            return { ...state, users: [], loading: action.payload };
        case constants.GET_USERS_FULFILLED:
            return { ...state, users: action.payload, loading: action.loading };
        case constants.GET_USERS_REJECTED:
            return { ...state, errorMessage: action.payload, snackbar: action.snackbar, loading: action.loading };
        case constants.GET_SEARCH_USER:
            return { ...state, loading: action.payload, value: action.value };
        case constants.GET_SINGLE_USER:
            return { ...state, modalLoading: action.payload };
        case constants.GET_SINGLE_USER_FULFILLED:
            return { ...state, selectedItem: action.payload, modalLoading: action.loading };
        case constants.GET_SINGLE_USER_REJECTED:
            return { ...state, errorMessage: action.payload, snackbar: action.snackbar, modalLoading: action.loading };
        case constants.HIDE_SNACKBAR:
            return { ...state, snackbar: action.payload, };
        case constants.CHANGE_MODAL_STATE:
            return { ...state, modal: action.payload, };
        default:
            return state;
    }
}


export default reducer;