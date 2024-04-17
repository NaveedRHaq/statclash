import React, { useState, useEffect } from 'react';
import { SingleEliminationBracket, SVGViewer , Match} from '@g-loot/react-tournament-brackets';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './stats';

const ER1 = [
  // First Round
  { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
  { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto",participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
  { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami",participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
  { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta",participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] },
  
  // Conference Semifinals
  { id: 5, name: "TBD", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [] },
  { id: 6, name: "TBD", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING",winner: "Toronto", participants: [] },
  
  // Conference Finals
  { id: 7, name: "TBD", nextMatchId: null, startTime: "2016-05-17", state: "PENDING",winner: "Cleveland", participants: [] },
];

const ER2 = [
  // First Round
  { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
  { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto",participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
  { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami",participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
  { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta",participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] },
  
  // Conference Semifinals
  { id: 5, name: "Cavaliers vs. Hawks", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Atlanta", name: "Atlanta Hawks" }] },
  { id: 6, name: "Raptors vs. Heat", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING",winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" },{ id: "Miami", name: "Miami Heat" }] },
  
  // Conference Finals
  { id: 7, name: "TBD", nextMatchId: null, startTime: "2016-05-17", state: "PENDING",winner: "Cleveland", participants: [] },
];
const ER3 = [
  // First Round
  { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
  { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto",participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
  { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami",participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
  { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta",participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] },
  
  // Conference Semifinals
  { id: 5, name: "Cavaliers vs. Hawks", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Atlanta", name: "Atlanta Hawks" }] },
  { id: 6, name: "Raptors vs. Heat", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING",winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" },{ id: "Miami", name: "Miami Heat" }] },
  
  // Conference Finals
  { id: 7, name: "Cavaliers vs. Raptors", nextMatchId: null, startTime: "2016-05-17", state: "PENDING",winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Toronto", name: "Toronto Raptors" }] },
];

const firstRound = [
  { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
  { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto",participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
  { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami",participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
  { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta",participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] }
];

const secondRound = [
  { id: 5, name: "Cavaliers vs. Hawks", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Atlanta", name: "Atlanta Hawks" }] },
  { id: 6, name: "Raptors vs. Heat", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING",winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" },{ id: "Miami", name: "Miami Heat" }] }
]

const thirdRound = [
  { id: 7, name: "Cavaliers vs. Raptors", nextMatchId: null, startTime: "2016-05-17", state: "PENDING",winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Toronto", name: "Toronto Raptors" }] },
]

let easternConferenceMatches = ER1;
let round = 1;
let games = firstRound;
const rounds = [firstRound, secondRound, thirdRound];
function App() {
  const [currentView, setCurrentView] = useState('Bracket');

  const Statistics = () => (
    <div>
      <h2 style={{marginLeft: '20px' }}>Team Stats</h2>
      <Stats/>
    </div>
  );

  const Header = () => (
    <div className="App-header">
      <button className="btn btn-primary m-2" onClick={() => setCurrentView('Bracket')}>Bracket</button>
      <button className="btn btn-secondary m-2" onClick={() => setCurrentView('Statistics')}>Statistics</button>
    </div>
  );
  


  return (
    <div>
      <Header />
      {currentView === 'Bracket' ? (
        <SingleEliminationBracket
          matches={ER2}
          matchComponent={Match} 
          svgWrapper={({ children, ...props }) => (
            <SVGViewer width={1200} height={800} {...props}>
              {children}
            </SVGViewer>
          )}
        />
      ) : (
        <Statistics />
      )}
    </div>
  );
};

export default App;