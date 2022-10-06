import React from 'react';
import Team from './Team';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TeamList(props){

  const MotoTeams = styled.ul`
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
    
      <MotoTeams>
      {props.teamList.map((team) =>
        <Team 
          whenTeamClicked={props.onTeamSelection}
          teamName={team.teamName}
          mx4501={team.mx4501}
          mx4502={team.mx4502}
          mx4503={team.mx4503}
          mx2501={team.mx2501}
          mx2502={team.mx2502}
          mx2503={team.mx2503}
          backUp4501={team.backUp4501}
          backUp4502={team.backUp4502}
          backUp2501={team.backUp2501}
          backUp2502={team.backUp2502}
          overallPoints={overallPoints}

          id={team.id}
          key={team.id}/>
      )}
      </MotoTeams>
    </React.Fragment>
  );
}

TeamList.propTypes = {
  TeamList: PropTypes.array,
  onTeamSelection: PropTypes.func
};

export default TeamList;

