import React from 'react';
import './../App.css';
import { RaceResults, RaceDetail } from './RaceResult';
// import RaceDetail from './RaceResult';

function App() {
  return (
    <React.Fragment>
      < RaceDetail />
      < RaceResults />
    </React.Fragment>
  );
}

export default App;
