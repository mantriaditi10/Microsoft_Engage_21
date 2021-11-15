import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null} , action) => {
    switch(action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.message}));
            return {...state, authData: action.message, loading: false, errors: null};
        default:
            return state;
    }
}

export default authReducer;