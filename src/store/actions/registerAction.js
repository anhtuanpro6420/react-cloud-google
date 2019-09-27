import axios from '../../axios';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from './types';

export const register = userData => dispatch => {
	dispatch({
		type: REGISTER_REQUEST
	});
	axios
		.post('/auth/register', userData)
		.then(res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: REGISTER_FAILED,
				payload: err.response.data
			});
		});
};
