import React from 'react';
import NewTeamForm from './NewTeamForm';
import TeamList from './TeamList';
import EditTeamForm from './EditTeamForm';
import TeamDetail from './TeamDetail';
import { useState, useEffect } from 'react';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db, auth } from './../firebase.js'
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';

function TeamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTeamList, setMainTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  const Button = styled.button`
    background-color: #6495ED; /* Cornflower Blue */
    border: 1px solid #FFFBC8;
    color: #FFFBC8;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  `;

  const Center = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 1230px;
    color: #FFFBC8;
    padding: 25px;
    margin: auto;
    background-color: #eeeeee;
    border-radius: 10px;
  `;

  useEffect(() => {
    function updateTeamElapsedWaitTime() {
      const newMainTeamList = mainTeamList.map(team => {
        const newFormattedWaitTime = formatDistanceToNow(team.timeOpen);
        return {...team, formattedWaitTime: newFormattedWaitTime};
      });
      setMainTeamList(newMainTeamList);
    }

    const waitTimeUpdateTimer = setInterval(() =>
      updateTeamElapsedWaitTime(), 
      60000
    );

    return function cleanup() {
      clearInterval(waitTimeUpdateTimer);
    }
  }, [mainTeamList])

  useEffect(() => { 
    const queryByTimestamp = query(
      collection(db, "teams"), 
      orderBy('timeOpen')
    );
    const unSubscribe = onSnapshot(
      queryByTimestamp, 
      (querySnapshot) => {
        const teams = [];
        querySnapshot.forEach((doc) => {
          const timeOpen = doc.get('timeOpen', {serverTimestamps: "estimate"}).toDate();
          const jsDate = new Date(timeOpen);
          teams.push({
            names: doc.data().names, 
            location: doc.data().location, 
            issue: doc.data().issue, 
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate),
            id: doc.id
          });
        });
        setMainTeamList(teams);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedTeam != null) {
      setFormVisibleOnPage(false);
      setSelectedTeam(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingTeam = async (id) => {
    await deleteDoc(doc(db, 'teams', id));
    setSelectedTeam(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingTeamInList = async (teamToEdit) => {
    const teamRef = doc(db, 'Teams', teamToEdit.id);
    await updateDoc(teamRef, teamToEdit);
    setEditing(false);
    setSelectedTeam(null);
  }

  const handleAddingNewTeamToList = async (newTeamData) => {
    const collectionRef = collection(db, 'teams');
    await addDoc(collectionRef, newTeamData);
    setFormVisibleOnPage(false);
  }

  
  const handleChangingSelectedTeam = (id) => {
    const selection = mainTeamList.filter(team => team.id === id)[0];
    setSelectedTeam(selection);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {      
      currentlyVisibleState = <EditTeamForm 
      team = {selectedTeam} 
      onEditTeam = {handleEditingTeamInList} />
      buttonText = 'Return to Team List';
    } else if (selectedTeam != null) {
      currentlyVisibleState = <TeamDetail 
      team={selectedTeam} 
      onClickingDelete={handleDeletingTeam}
      onClickingEdit = {handleEditClick} />
      buttonText = 'Return to Team List';
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTeamForm 
      onNewTeamCreation={handleAddingNewTeamToList}/>;
      buttonText = 'Return to Team List'; 
    } else {
      currentlyVisibleState = <TeamList 
      onTeamSelection={handleChangingSelectedTeam} 
      teamList={mainTeamList} />;
      buttonText = 'Add Team'; 
    }
    return (
      <>
        {currentlyVisibleState}
        <Center>
          {error ? null : <Button className='App' onClick={handleClick}>{buttonText}</Button>} 
        </Center>
      </>
    );
  }
}


export default TeamControl;

