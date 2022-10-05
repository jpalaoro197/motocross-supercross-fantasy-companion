import React from 'react';
import PropTypes from 'prop-types'; 
import ReusableForm from './ReusableForm';
// import { serverTimestamp } from "firebase/firestore";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      mx4501: event.target.mx4501.value, 
      mx4502: event.target.mx4502.value, 
      mx4503: event.target.mx4503.value, 
      mx2501: event.target.mx2501.value, 
      mx2502: event.target.mx2502.value, 
      mx2503: event.target.mx2503.value,
      backUp4501: event.target.backUp4501.value,
      backUp4502: event.target.backup4502.value,
      backUp2501: event.target.backUp2501.value,
      backUp2502: event.target.backup2502.value,
    
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText='Help!' />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
