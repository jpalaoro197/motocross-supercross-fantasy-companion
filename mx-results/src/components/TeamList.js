import React from 'react';
import Team from './Team';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TeamList(props){

  const HelpQueueTeams = styled.ul`
    background-color: #F8D86E;
    width: 1230px;
    margin: auto;
    margin-top: 1px;
    border: 2px solid #FFFBC8;
    padding: 25px;
    border-radius: 10px;
  `;

  return (
    
    <React.Fragment>
    
      <HelpQueueTeams>
      {props.TeamList.map((Team) =>
        <Team 
          whenTeamClicked={props.onTeamSelection}
          ={Team.names}
          location={Team.location}
          formattedWaitTime={Team.formattedWaitTime}
          issue={Team.issue}
          id={Team.id}
          key={Team.id}/>
      )}
      </HelpQueueTeams>
    </React.Fragment>
  );
}

TeamList.propTypes = {
  TeamList: PropTypes.array,
  onTeamSelection: PropTypes.func
};

export default TeamList;

