import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Ticket(props){

  const HelpQueueTickets = styled.div`
  background-color: #f5b700;
  width: 300px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #fffbc8;
  text-align: center;
  border-radius: 10px;
  `;

  const H3 = styled.h3`
  font-size: 22px;
  color: #FFFBC8;
  `

  return (
    
    <React.Fragment>
      <HelpQueueTickets>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <H3>{props.location} - {props.names}</H3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      </HelpQueueTickets>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
}

export default Ticket;