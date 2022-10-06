// import React from 'react';
// import './../App.css';
// import { RaceResults, RaceDetail } from './RaceResult';
// // import RaceDetail from './RaceResult';

// function App() {
//   return (
//     <React.Fragment>
//       < RaceDetail />
//       < RaceResults />
//     </React.Fragment>
//   );
// }

// export default App;
import React from 'react';
import Header from './Header';
import SignIn from './SignIn';
import TeamControl from './TeamControl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<TeamControl />} />
      </Routes>
    </Router>
  );
}
export default App;
