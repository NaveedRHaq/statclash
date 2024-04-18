import React, { useState } from 'react';

const firstRound = [
  { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
  { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
  { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami", participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
  { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta", participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] }
];

const secondRound = [
    { id: 5, name: "Cavaliers vs. Hawks", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Atlanta", name: "Atlanta Hawks" }] },
    { id: 6, name: "Raptors vs. Heat", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING",winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" },{ id: "Miami", name: "Miami Heat" }] }
  ]
  
  const thirdRound = [
    { id: 7, name: "Cavaliers vs. Raptors", nextMatchId: null, startTime: "2016-05-17", state: "PENDING",winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" },{ id: "Toronto", name: "Toronto Raptors" }] },
  ]

// Define NBA team colors
const teamColors = {
  "Cleveland Cavaliers": { backgroundColor: '#6F263D', color: '#FFB81C' },  // Wine and gold
  "Detroit Pistons": { backgroundColor: '#C8102E', color: '#FFFFFF' },      // Red and white
  "Toronto Raptors": { backgroundColor: '#CE1141', color: '#FFFFFF' },      // Red and white
  "Indiana Pacers": { backgroundColor: '#002D62', color: '#FDBB30' },       // Navy and gold
  "Miami Heat": { backgroundColor: '#98002E', color: '#F9A01B' },           // Red and orange
  "Charlotte Hornets": { backgroundColor: '#1D1160', color: '#00788C' },    // Purple and teal
  "Boston Celtics": { backgroundColor: '#007A33', color: '#FFFFFF' },       // Green and white
  "Atlanta Hawks": { backgroundColor: '#E03A3E', color: '#C1D32F' }         // Red and volt green
};

const GameButtons2 = () => {
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
      {secondRound.map(game => (
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

export default GameButtons2;

