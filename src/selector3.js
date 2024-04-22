import React, { useState } from 'react';
import { rounds, teamColors } from './nbadata';

const GameButtons3 = () => {
  const [selectedGames, setSelectedGames] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [popup, setPopup] = useState({ show: false, content: '' });

  const handleButtonClick = (gameId, teamName) => {
    const newSelectedGames = { ...selectedGames };

    // If there's already a selection for this game, remove or replace it
    if (newSelectedGames[gameId]) {
      if (newSelectedGames[gameId] === teamName) {
        // If the same team is clicked again, deselect it
        delete newSelectedGames[gameId];
        setSelectedTeams((prev) => prev.filter((team) => team !== teamName));
      } else {
        // Replace the existing team with the new one
        const oldTeam = newSelectedGames[gameId];
        setSelectedTeams((prev) => prev.filter((team) => team !== oldTeam));
        newSelectedGames[gameId] = teamName;
        setSelectedTeams((prev) => [...prev, teamName]);
      }
    } else {
      // Add new team selection
      newSelectedGames[gameId] = teamName;
      setSelectedTeams((prev) => [...prev, teamName]);
    }

    setSelectedGames(newSelectedGames);
  };

  const allGamesSelected = Object.keys(selectedGames).length === rounds.thirdRound.length;

  const handleRevealWinners = () => {
    if (allGamesSelected) {
      const winners = rounds.thirdRound.map((game) => ({
        match: game.name,
        winner: game.winner,
      }));

      const content = winners.map((winner) => (
        <div key={winner.match}>
          <strong>{winner.match}:</strong> {winner.winner}
        </div>
      ));

      setPopup({
        show: true,
        content,
      });

      setTimeout(() => {
        setPopup({ show: false, content: '' });
      }, 3000); // Hide the popup after a few seconds
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {rounds.thirdRound.map((game) => (
        <div key={game.id} style={{ margin: '3px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          {game.participants.map((participant) => (
            <button
              key={participant.id}
              style={{
                margin: '3px',
                padding: '10px 20px',
                backgroundColor: teamColors[participant.name].backgroundColor,
                color: teamColors[participant.name].color,
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={() => handleButtonClick(game.id, participant.id)}
            >
              {participant.name}
            </button>
          ))}
        </div>
      ))}

      {/* Reveal Winners Button */}
      <button
        onClick={handleRevealWinners}
        disabled={!allGamesSelected}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: allGamesSelected ? '#007BFF' : '#D3D3D3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: allGamesSelected ? 'pointer' : 'not-allowed',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        Reveal Winners
      </button>

      {/* Display Selected Teams */}
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Teams:</h3>
        <ul>
          {selectedTeams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>

      {/* Popup for showing winners */}
      {popup.show && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            minWidth: '300px',
            textAlign: 'center',
          }}
        >
          {popup.content}
        </div>
      )}
    </div>
  );
};

export default GameButtons3;
