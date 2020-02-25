import Axios from "axios";
import constants from "./constants";

export const fetchData = (bool) => {
    return {
        type: constants.GET_USERS,
        payload: bool,
    };
}
export const fetchDataFulfilled = (data) => {
    return {
        type: constants.GET_USERS_FULFILLED,
        payload: data,
        loading: false,
    };
}

export const fetchDataRejected = (error) => {
    return {
        type: constants.GET_USERS_REJECTED,
        payload: error,
        snackbar: true,
        loading: false,
    };
}

export const fetchSingleData = (bool) => {
    return {
        type: constants.GET_SINGLE_USER,
        payload: bool,
    };
}
export const fetchSingleDataFulfilled = (data) => {
    return {
        type: constants.GET_SINGLE_USER_FULFILLED,
        payload: data,
        loading: false,
    };
}

export const fetchSingleDataRejected = (error) => {
    return {
        type: constants.GET_SINGLE_USER_REJECTED,
        payload: error,
        snackbar: true,
        loading: false,
    };
}
export const changeSearchData = (bool, text) => {
    return {
        type: constants.GET_SEARCH_USER,
        payload: bool,
        value: text
    };
}

export const changeSnackbarState = (bool) => {
    return {
        type: constants.HIDE_SNACKBAR,
        payload: bool,
    };
}

export const changeModalState = (bool) => {
    return {
        type: constants.CHANGE_MODAL_STATE,
        payload: bool,
    };
}

export const change_modal_state = (bool) => {
    return dispatch => {
        dispatch(changeModalState(bool));
    }
}


export const hide_Snackbar = (bool) => {
    return dispatch => {
        dispatch(changeSnackbarState(bool));
    }
}

export const getUsers = () => {
    return dispatch => {
        dispatch(fetchData(true));
        Axios.get('https://api.github.com/users').then(res => {
            dispatch(fetchDataFulfilled(res.data));
        }).catch(err => {
            dispatch(fetchDataRejected(err.message))
        }
        );
    }
}

export const getSingleUser = (login) => {
    return dispatch => {
        dispatch(fetchSingleData(true));
        Axios.get('https://api.github.com/users/' + login).then(res => {
            dispatch(fetchSingleDataFulfilled(res.data));
        }).catch(err => {
            dispatch(fetchSingleDataRejected(err.message))
        }
        );
    }
}

export const StartSearchUser = (text) => {
    return dispatch => {
        dispatch(changeSearchData(true, text));
    }
}

export const SearchUser = (text) => {
    return dispatch => {
        dispatch(fetchData(true));
        Axios.get('https://api.github.com/search/users?q=' + text).then(res => {
            dispatch(fetchDataFulfilled(res.data.items));
        }).catch(err => {
            dispatch(fetchDataRejected(err.message))
        }
        );
    }
}