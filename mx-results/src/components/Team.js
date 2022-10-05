import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Team(props){

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
      <MyTeam>
      <div onClick = {() => props.whenMyTeamClicked(props.id)}>
        <H3>{props.teamName}</H3>
        <p><em>{props.mx4501}</em></p>
        <p><em>{props.mx4502}</em></p>
        <p><em>{props.mx4503}</em></p>
        <p><em>{props.mx2501}</em></p>
        <p><em>{props.mx2502}</em></p>
        <p><em>{props.mx2503}</em></p>
        <p><em>{props.backUp4501}</em></p>
        <p><em>{props.backUp4502}</em></p>
        <p><em>{props.backUp2501}</em></p>
        <p><em>{props.backUp2502}</em></p>
      </div>
      </MyTeam>
    </React.Fragment>
  );
}

Team.propTypes = {
  teamName: PropTypes.string,
  mx4501: PropTypes.string,
  mx4502: PropTypes.string,
  mx4503: PropTypes.string,
  mx2501: PropTypes.string,
  mx2502: PropTypes.string,
  mx2503: PropTypes.string,
  backUp4501 : PropTypes.string,
  backUp2501 : PropTypes.string,
  backUp4502 : PropTypes.string,
  backUp2502: PropTypes.string,
  overallPoints: PropTypes.number,
  id: PropTypes.string,
}

export default Team;