import axios from 'axios';
import { FETCH_USER } from './types';

// action creator

export const fetchUser = () => async dispatch => {    
    try {
        const res = await axios.get('/api/current_user');

        console.log('fetchUser:', res);

        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (e) {
        console.error('caught', e);
    }
};

export const handleToken = (token) => async dispatch => {
    try {
        const res = await axios.post('/api/stripe', token);
    
        console.log('handleToken:', res);

        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (e) {
        console.error('caught', e);        
    }
} 

/*
export const fetchUser = () => {

    return function(dispatch) {

        console.log('fetchUser');

        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER, 
                payload: res
            }))
            .catch( error => {
                console.log(error);
            });
    };
};
*/

/*
export const fetchUser = () =>

    function(dispatch) {

        console.log('fetchUser');

        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER, 
                payload: res
            }))
            .catch( error => {
                console.log(error);
            });
    };
*/

/*
export const fetchUser = () =>

    (dispatch) => {

        console.log('fetchUser');

        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER, 
                payload: res
            }))
            .catch( error => {
                console.log(error);
            });
    };
*/

/*
export const fetchUser = () => dispatch => {

    console.log('fetchUser');

    axios.get('/api/current_user')
        .then(res => dispatch({
            type: FETCH_USER, 
            payload: res
        }))
        .catch( error => {
            console.log(error);
        });
};
*/

