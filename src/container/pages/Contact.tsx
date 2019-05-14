import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { nameInput, emailInput, messageInput, submitForm } from '../../actions/form';
import Contact from '../../components/pages/Contact';

interface StateProps {
    resStatus: '' | 'success' | 'error' | 'validate';
}

interface DispatchProps {
    nameInput: (input: string) => void;
    emailInput: (input: string) => void;
    messageInput: (input: string) => void
    postFormDataStart: () => void;
}

const mapStateToProps = (state: StateProps): StateProps => ({
    resStatus: state.resStatus
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    nameInput: input => dispatch(nameInput(input)),
    emailInput: input => dispatch(emailInput(input)),
    messageInput: input => dispatch(messageInput(input)),
    postFormDataStart: ()=> dispatch(submitForm.start()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);