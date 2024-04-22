import React, { useState, useEffect } from 'react';
import { SingleEliminationBracket, SVGViewer , Match} from '@g-loot/react-tournament-brackets';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './stats';
import Media from './media'
import GameButtons1 from './selector1';
import GameButtons2 from './selector2';
import GameButtons3 from './selector3';
import Basketball from './basketball';
import NFL from './nfl';
import MLB from './mlb';
function App() {
  const [currentView, setCurrentView] = useState('Bracket');
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentSport, setCurrentSport] = useState('basketball');

  
  const Statistics = () => (
    <div>
      <h2>Team Stats</h2>
      <Stats />
    </div>
  );

  const News = () => (
    <div>
      <h2>Sports News</h2>
      <Media />
    </div>
  );

  const Header = () => (
    <div className="App-header">
      <button
        className={`btn m-2 ${currentView === 'Bracket' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('Bracket')}
      >
       NBA Bracket
      </button>
      <button
        className={`btn m-2 ${currentView === 'NFLBracket' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('NFLBracket')}
      >
       NFL Bracket
      </button>
      <button
        className={`btn m-2 ${currentView === 'MLBBracket' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setCurrentView('MLBBracket')}
      >
       MLB Bracket
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
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '100%' }}
      >
        <div style={{ flex: 2, minWidth: 0 }}>
          {currentView === 'Bracket' ? (
            <Basketball/>
          ) : currentView === 'Statistics' ? (
            <Statistics />
          ) : currentView === 'NFLBracket' ? (
            <NFL />
          ) : currentView === 'MLBBracket' ? (
            <MLB />
          ) :(
            <News />
          )}
        </div>
        
      </div>
      
  
    </div>
  );
}

export default App;