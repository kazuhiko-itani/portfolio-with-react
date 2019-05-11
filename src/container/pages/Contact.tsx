import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { nameInput, emailInput, messageInput } from '../../actions/form';
import Contact from '../../components/pages/Contact';
import { inputState } from '../../reducer';

interface StateProps {
    name: string;
    email: string;
    message: string;
}

interface DispatchProps {
    nameInput: (input: string) => void;
    emailInput: (input: string) => void;
    messageInput: (input: string) => void
}

const mapStateToProps = (state: inputState): StateProps => ({
    name: state.name,
    email: state.email,
    message: state.message
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    nameInput: input => dispatch(nameInput(input)),
    emailInput: input => dispatch(emailInput(input)),
    messageInput: input => dispatch(messageInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);