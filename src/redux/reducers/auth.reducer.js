import * as authActions from '../actions/auth.actions';

const INITIAL_STATE ={
    user: null, 
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authActions.SET_USER: {
            return {...state, user: action.payload}
        }
        default:
            return state;
    }
};

export default authReducer; 