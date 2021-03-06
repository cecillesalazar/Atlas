import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';
import {
  QUESTION_LEVEL_SUCCESS
} from '../actions/users';

const initialState = {
    currentUser: null,
    questionLevels: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });

    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser,
            error: null
        });

    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });

    } else if (action.type === QUESTION_LEVEL_SUCCESS){
        return Object.assign({}, state, {
            questionLevels: action.questionLevels
        });
    }
    return state;
}
