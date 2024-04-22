import React, { useState, useEffect } from 'react';
import { SingleEliminationBracket, SVGViewer , Match} from '@g-loot/react-tournament-brackets';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './stats';
import Media from './media'
import GameButtons1 from './selector1MLB';
import GameButtons2 from './selector2MLB';
import GameButtons3 from './selector3MLB';



const ER1 = [

        { id: 1, name: "Astros vs. Twins", nextMatchId: 5, startTime: "2023-10-04", state: "PENDING", winner: "Astros", participants: [{ id: "Houston", name: "Houston Astros" }, { id: "Minnesota", name: "Minnesota Twins" }] },
        { id: 2, name: "Rangers vs. Orioles", nextMatchId: 5, startTime: "2023-10-04", state: "PENDING", winner: "Rangers", participants: [{ id: "Texas", name: "Texas Rangers" }, { id: "Baltimore", name: "Baltimore Orioles" }] },
        { id: 3, name: "Dodgers vs. Diamondbacks", nextMatchId: 6, startTime: "2023-10-05", state: "PENDING", winner: "Diamondbacks", participants: [{ id: "Los Angeles", name: "Los Angeles Dodgers" }, { id: "Arizona", name: "Arizona Diamondbacks" }] },
        { id: 4, name: "Braves vs. Phillies", nextMatchId: 6, startTime: "2023-10-05", state: "PENDING", winner: "Phillies", participants: [{ id: "Atlanta", name: "Atlanta Braves" }, { id: "Philadelphia", name: "Philadelphia Phillies" }] },

        { id: 5, name: "TBD", nextMatchId: 7, startTime: "2023-10-12", state: "PENDING", winner: "Astros", participants: [] },
        { id: 6, name: "TBD", nextMatchId: 7, startTime: "2023-10-12", state: "PENDING", winner: "Diamondbacks", participants: [] }
    ,
        { id: 7, name: "TBD", nextMatchId: null, startTime: "2023-10-20", state: "PENDING", winner: "Rangers", participants: [] }
    
];

const ER2 = [

    { id: 1, name: "49ers vs. Packers", nextMatchId: 5, startTime: "2024-01-05", state: "PENDING", winner: "San Francisco", participants: [{ id: "San Francisco", name: "San Francisco 49ers" }, { id: "Green Bay", name: "Green Bay Packers" }] },
    { id: 2, name: "Buccaneers vs. Lions", nextMatchId: 6, startTime: "2024-01-05", state: "PENDING", winner: "Detroit", participants: [{ id: "Tampa Bay", name: "Tampa Bay Buccaneers" }, { id: "Detroit", name: "Detroit Lions" }] },
    { id: 3, name: "Texans vs. Ravens", nextMatchId: 5, startTime: "2024-01-06", state: "PENDING", winner: "Baltimore", participants: [{ id: "Houston", name: "Houston Texans" }, { id: "Baltimore", name: "Baltimore Ravens" }] },
    { id: 4, name: "Chiefs vs. Bills", nextMatchId: 6, startTime: "2024-01-06", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "Buffalo", name: "Buffalo Bills" }] },

    { id: 5, name: "Ravens vs. Chiefs", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "Kansas City", participants: [{ id: "Baltimore", name: "Baltimore Ravens" }, { id: "Kansas City", name: "Kansas City Chiefs" }] },
    { id: 6, name: "Lions vs. 49ers", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "San Francisco", participants: [{ id: "Detroit", name: "Detroit Lions" }, { id: "San Francisco", name: "San Francisco 49ers" }] },

    { id: 7, name: "Chiefs vs. 49ers", nextMatchId: null, startTime: "2024-01-20", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "San Francisco", name: "San Francisco 49ers" }] },

];
const ER3 = [

    { id: 1, name: "49ers vs. Packers", nextMatchId: 5, startTime: "2024-01-05", state: "PENDING", winner: "San Francisco", participants: [{ id: "San Francisco", name: "San Francisco 49ers" }, { id: "Green Bay", name: "Green Bay Packers" }] },
    { id: 2, name: "Buccaneers vs. Lions", nextMatchId: 6, startTime: "2024-01-05", state: "PENDING", winner: "Detroit", participants: [{ id: "Tampa Bay", name: "Tampa Bay Buccaneers" }, { id: "Detroit", name: "Detroit Lions" }] },
    { id: 3, name: "Texans vs. Ravens", nextMatchId: 5, startTime: "2024-01-06", state: "PENDING", winner: "Baltimore", participants: [{ id: "Houston", name: "Houston Texans" }, { id: "Baltimore", name: "Baltimore Ravens" }] },
    { id: 4, name: "Chiefs vs. Bills", nextMatchId: 6, startTime: "2024-01-06", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "Buffalo", name: "Buffalo Bills" }] },

    { id: 5, name: "Ravens vs. Chiefs", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "Kansas City", participants: [{ id: "Baltimore", name: "Baltimore Ravens" }, { id: "Kansas City", name: "Kansas City Chiefs" }] },
    { id: 6, name: "Lions vs. 49ers", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "San Francisco", participants: [{ id: "Detroit", name: "Detroit Lions" }, { id: "San Francisco", name: "San Francisco 49ers" }] },

    { id: 7, name: "Chiefs vs. 49ers", nextMatchId: null, startTime: "2024-01-20", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "San Francisco", name: "San Francisco 49ers" }] },

];

let easternConferenceMatches = ER1;
let round = 1;

function MLB() {
  const [currentView, setCurrentView] = useState('Bracket');
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);

  const updateScore = (correctGuesses) => {
    setScore(score + correctGuesses); // Update the score
  };

  const advanceRound = () => {
    const nextRoundIndex = currentRoundIndex + 1;

    if (currentRoundIndex === 0) {
      easternConferenceMatches = ER2;
      setCurrentRoundIndex(nextRoundIndex);
    } else if (currentRoundIndex === 1) {
      easternConferenceMatches = ER3;
      setCurrentRoundIndex(nextRoundIndex);
    } else {
      easternConferenceMatches = ER1;
      alert("Playoffs have ended");
      setCurrentRoundIndex(0);
    }
  };

  const onRevealWinners = (selectedTeams, roundsData) => {
    let correctGuesses = 0;
    roundsData.forEach((game) => {
      if (selectedTeams.includes(game.winner)) {
        correctGuesses++;
      }
    });

    setScore((prevScore) => prevScore + correctGuesses); // Update the overall score
  };

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
      {/* Displaying the overall score */}
      <div className="score-display" style={{ padding: '10px' }}>
        <h4>Score: {score}</h4>
      </div>
    </div>
  );

  return (
    <div>
        <h4>Score: {score}</h4>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '100%' }}
      >
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
            {currentRoundIndex === 0 ? (
              <GameButtons1
                onRevealWinners={(selectedTeams) => onRevealWinners(selectedTeams, ER1)}
                updateScore={updateScore} // Pass the function here
              />
            ) : currentRoundIndex === 1 ? (
              <GameButtons2
              onRevealWinners={(selectedTeams) => onRevealWinners(selectedTeams, ER2)}
              updateScore={updateScore} // Pass the function here
            />
            ) : (
              <GameButtons3 onRevealWinners={(selectedTeams) => onRevealWinners(selectedTeams, ER3)} />
            )}
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
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MLB;