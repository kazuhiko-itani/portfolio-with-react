import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { nameInput, emailInput, messageInput, submitForm } from '../../actions/form';
import Contact from '../../components/pages/Contact';
import { formState } from '../../reducer';

interface StateProps {
    name: string;
    email: string;
    message: string;
    resStatus: string;
}

interface DispatchProps {
    nameInput: (input: string) => void;
    emailInput: (input: string) => void;
    messageInput: (input: string) => void
    postFormDataStart: () => void;
}

const mapStateToProps = (state: formState): StateProps => ({
    name: state.name,
    email: state.email,
    message: state.message,
    resStatus: state.resStatus
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    nameInput: input => dispatch(nameInput(input)),
    emailInput: input => dispatch(emailInput(input)),
    messageInput: input => dispatch(messageInput(input)),
    postFormDataStart: ()=> dispatch(submitForm.start()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);