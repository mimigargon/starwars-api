export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const saveUser = user => dispatch => {
    dispatch(setUser(user))
}; 