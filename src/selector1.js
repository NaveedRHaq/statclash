import React, { useState } from 'react';
import { rounds, teamColors } from './nbadata';

const GameButtons1 = () => {

  const [popup, setPopup] = useState({ show: false, content: '' });

  const handleButtonClick = (teamName, winner) => {
    const isWinner = teamName === winner;
    setPopup({
      show: true,
      content: isWinner ? (
        <span style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>&#10003; Winner Selected</span>
      ) : (
        <span style={{ color: 'red', fontSize: '24px', fontWeight: 'bold' }}>&#10007; Loser Selected</span>
      )
    });

    setTimeout(() => {
      setPopup({ show: false, content: '' });
    }, 900);  // Hide the popup after 3 seconds
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {rounds.firstRound.map(game => (
        <div key={game.id} style={{ margin: '3px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          {game.participants.map(participant => (
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
                fontWeight: 'bold'
              }}
              onClick={() => handleButtonClick(participant.id, game.winner)}
            >
              {participant.name}
            </button>
          ))}
        </div>
      ))}
      {popup.show && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,  // Ensure it's on top of other content
          minWidth: '300px',  // Ensure the popup is reasonably wide
          textAlign: 'center'  // Center the text inside the popup
        }}>
          {popup.content}
        </div>
      )}
    </div>
  );
};

export default GameButtons1;

