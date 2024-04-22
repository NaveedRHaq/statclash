import React, { useState, useEffect } from 'react';
import { SingleEliminationBracket, SVGViewer , Match} from '@g-loot/react-tournament-brackets';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './stats';
import Media from './media'
import GameButtons1 from './selector1';
import GameButtons2 from './selector2';
import GameButtons3 from './selector3';

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

let easternConferenceMatches = ER1;
let round = 1;
function App() {
  const [currentView, setCurrentView] = useState('Bracket');
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const advanceRound = () => {
    const nextRoundIndex = currentRoundIndex + 1;
    
    if (currentRoundIndex === 0){
      easternConferenceMatches = ER2;
      setCurrentRoundIndex(nextRoundIndex);
    }else if (currentRoundIndex === 1){
      easternConferenceMatches = ER3;
      setCurrentRoundIndex(nextRoundIndex);
    }else{
      easternConferenceMatches = ER1;
      alert("Playoffs have ended");
      setCurrentRoundIndex(0);
    }
  };
  
  const Statistics = () => (
    <div>
      <h2 style={{marginLeft: '20px' }}>Team Stats</h2>
      <Stats/>
    </div>
  );

  const News = () => (
    <div>
      <h2>Sports News</h2>
      <Media/>
    </div>
  );

  const Header = () => (
    <div className="App-header">
      <button
        className={`btn m-2 ${currentView === 'Bracket' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('Bracket')}
      >
        Bracket
      </button>
      <button
        className={`btn m-2 ${currentView === 'Statistics' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('Statistics')}
      >
        Statistics
      </button>
      <button
        className={`btn m-2 ${currentView === 'News' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('News')}
      >
        Sports News
      </button>
    </div>
  );  
  
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '100%' }}>
        <div style={{ flex: 2, minWidth: 0 }}>
          {currentView === 'Bracket' ? (
            <SingleEliminationBracket
              matches={easternConferenceMatches}
              matchComponent={Match}
              svgWrapper={({ children, ...props }) => (
                <SVGViewer width={1200} height={800} {...props}>
                  {children}
                </SVGViewer>
              )}
            />
          ) : currentView === 'Statistics' ? (
            <Statistics />
          ) : (
            <News />
          )}
        </div>
        {currentView === 'Bracket' && (
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            {currentRoundIndex === 0 ? <GameButtons1 /> : currentRoundIndex === 1 ? <GameButtons2 /> : <GameButtons3 />}
          </div>
        )}
      </div>
      {currentView === 'Bracket' ? (
            <button 
            onClick={advanceRound} 
            style={{
              position: 'fixed',
              right: '20px',
              bottom: '20px',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Advance Round
          </button>
          ) : (<div></div>)
          }
      
    </div>
  );
  
};

export default App;