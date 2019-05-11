export enum FormActionType {
    NAMEINPUT = 'FORM/NAMEINPUT',
    EMAILINPUT = 'FORM/EMAILINPUT',
    MESSAGEINPUT = 'FORM/MESSAGEINPUT',
}

export interface FormAction {
    type: FormActionType;
    input: string;
}

export const nameInput = (input: string): FormAction => ({
    input,
    type: FormActionType.NAMEINPUT
});

export const emailInput = (input: string): FormAction => ({
    input,
    type: FormActionType.EMAILINPUT
});

export const messageInput = (input: string): FormAction => ({
    input,
    type: FormActionType.MESSAGEINPUT
});