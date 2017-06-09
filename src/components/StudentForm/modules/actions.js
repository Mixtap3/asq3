import database from '../../../database';
import {
	ADD_STUDENT_REQUEST,
	ADD_STUDENT_SUCCESS,
	ADD_STUDENT_FAILURE,
} from './constants';

const addStudentRequest = () => ({
	type: ADD_STUDENT_REQUEST
});

const addStudentSuccess = (student) => ({
	type: ADD_STUDENT_SUCCESS,
	student
});

const addStudentFailure = (error) =>({
	type: ADD_STUDENT_FAILURE, 
	error: error
});


export const addStudent = (student) => {
	return dispatch => {
		dispatch(addStudentRequest());
		const studentRef = database.ref('/students');
		studentRef.push({
			student
		})
		.then(()=>{
			dispatch(addStudentSuccess({student}));
		})
		.catch((error) => {
			console.log('Dispatch error')
			dispatch(addStudentFailure(error));
		});
	}
}