import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select
          type='text'
          name='mx4501'
          placeholder='Pair Names' />
        <select
          type='text'
          name='mx4502'
          placeholder='Location' />
        <select
          type='text'
          name='mx4503'
          placeholder='Pair Names' />
        <select
          type='text'
          name='mx2501'
          placeholder='Location' />
          <select
          type='text'
          name='mx2502'
          placeholder='Pair Names' />
        <select
          type='text'
          name='mx2503'
          placeholder='Location' />
          <select
          type='text'
          name='backUp4501'
          placeholder='Pair Names' />
        <select
          type='text'
          name='backUp4502'
          placeholder='Location' />
          <select
          type='text'
          name='backUp2501'
          placeholder='Pair Names' />
        <select
          type='text'
          name='backup2502'
          placeholder='Location' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;