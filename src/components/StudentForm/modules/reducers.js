import {
	ADD_STUDENT_REQUEST,
	ADD_STUDENT_SUCCESS,
	ADD_STUDENT_FAILURE,
} from './constants';

const initialState = {
	loading: false, 
	error2: null, 
	student: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_STUDENT_REQUEST: {
			return Object.assign({}, state, {
				loading:true,
			});
		}
		case ADD_STUDENT_SUCCESS: {
			return Object.assign({}, state, {
				loading:false,
				student:action.student,
				error2:null,
			});
		}	
		case ADD_STUDENT_FAILURE: {
			console.log("ERROR ÄR DETTA:" + action.error)
			return Object.assign({}, state, {
				loading:false,
				error2: action.error,
			});
		}
		default:
			return state; 
	};
}