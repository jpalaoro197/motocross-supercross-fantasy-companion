import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditTeamForm (props) {
  const { team } = props;

  function handleEditTeamFormSubmission(event) {
    event.preventDefault();
    props.onEditTeam({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: team.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTeamFormSubmission} 
        buttonText='Update Team' />
    </React.Fragment>
  );
}

EditTeamForm.propTypes = {
  onEditTeam: PropTypes.func,
  team: PropTypes.object
};

export default EditTeamForm;
