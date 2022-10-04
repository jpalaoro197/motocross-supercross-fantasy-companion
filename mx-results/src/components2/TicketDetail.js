import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 

  const HelpQueueTickets = styled.div`
    background-color: #f5b700;
    width: 300px;
    margin: auto;
    padding: 45px;
    border: 2px solid #fffbc8;
    text-align: center;
    border-radius: 10px;
  `;

  const H3 = styled.h3`
    font-size: 22px;
    color: #FFFBC8;
  `
  const HelpQueueTicket = styled.div`
    background-color: #F8D86E;
    width: 1280px;
    margin: auto;
    border: 2px solid #FFFBC8;
    padding-top: 150px;
    padding-bottom: 150px;
    border-radius: 10px;
  `;

  const Button = styled.button`
    background-color: #f5b700; /* Cornflower Blue */
    border: 2px solid #FFFBC8;
    margin: 10px;
    color: #FFFBC8;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  `;

  return (
    <React.Fragment>
      <HelpQueueTicket>
        <HelpQueueTickets>
        <h2>Ticket Detail</h2>
        <H3>{ticket.location} - {ticket.names}</H3>
        <p><em>{ticket.issue}</em></p>
        <Button onClick={onClickingEdit}>Update Ticket</Button>
        <Button onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</Button>
        
        </HelpQueueTickets>
      </HelpQueueTicket>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;