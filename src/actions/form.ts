// sagaの部分を分離したい。。。
export enum FormActionType {
    NAMEINPUT = 'FORM/NAMEINPUT',
    EMAILINPUT = 'FORM/EMAILINPUT',
    MESSAGEINPUT = 'FORM/MESSAGEINPUT',
    POSTDATASTART = 'FORM/POSTDATASTART',
    POSTDATASUCCEED = 'FORM/POSTDATASUCCEED',
    POSTDATAFAIL = 'FORM/POSTDATAFAIL'
}

export interface FormInputAction {
    type: FormActionType;
    input: string;
}

export interface FormSubmitAction {
    type: FormActionType;
    payload?: any;
}

export interface formData {
    name: string;
    email: string;
    message: string;
}

export interface resultStatus {
    status: string;
}

export const nameInput = (input: string): FormInputAction => ({
    input,
    type: FormActionType.NAMEINPUT
});

export const emailInput = (input: string): FormInputAction => ({
    input,
    type: FormActionType.EMAILINPUT
});

export const messageInput = (input: string): FormInputAction => ({
    input,
    type: FormActionType.MESSAGEINPUT
});

export const submitForm = {
    start: (): FormSubmitAction  => ({ 
        type: FormActionType.POSTDATASTART
    }),

    succeed: (result: resultStatus): FormSubmitAction => ({
        payload: { result },
        type: FormActionType.POSTDATASUCCEED
    }),

    fail: (result: resultStatus): FormSubmitAction => ({
        payload: { result },
        type: FormActionType.POSTDATAFAIL
    })
};

 export type FormAction = FormInputAction & FormSubmitAction;