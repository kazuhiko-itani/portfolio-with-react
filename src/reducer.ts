import { Reducer } from 'redux';
import { FormAction, FormActionType } from './actions/form';

export interface formState {
    name: string;
    email: string;
    message: string;
    resStatus: string;
}

export const initialState: formState = {
    name: '',
    email: '',
    message: '',
    resStatus: ''
};

const formReducer: Reducer<formState, FormAction> = (
    state: formState = initialState,
    action: FormAction
): formState => {
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
        case FormActionType.POSTDATASTART:
            return {
                ...state
            };
        case FormActionType.POSTDATASUCCEED:
            return {
                ...state,
                resStatus: action.payload.result.status
            }
        case FormActionType.POSTDATAFAIL:
            return {
                ...state,
                resStatus: action.payload.result.status
            }
        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _: never = action.type;

            return state;
        }
    }
};

export default formReducer;