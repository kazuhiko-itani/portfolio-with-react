import { Reducer } from 'redux';
import { FormAction, FormActionType } from './actions/form';

export interface inputState {
    name: string;
    email: string;
    message: string;
}

export const initialState: inputState = {
    name: '',
    email: '',
    message: ''
};

const formReducer: Reducer<inputState, FormAction> = (
    state: inputState = initialState,
    action: FormAction
): inputState => {
    switch (action.type) {
        case FormActionType.NAMEINPUT:
            return {
                ...state,
                name: action.input
            };
        case FormActionType.EMAILINPUT:
            return {
                ...state,
                email: action.input
            };
        case FormActionType.MESSAGEINPUT:
            return {
                ...state,
                message: action.input
            };
        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _: never = action.type;

            return state;
        }
    }
};

export default formReducer;