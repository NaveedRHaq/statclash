export const nflRounds = {
    firstRound: [
        { id: 1, name: "49ers vs. Packers", nextMatchId: 5, startTime: "2024-01-05", state: "PENDING", winner: "San Francisco", participants: [{ id: "San Francisco", name: "San Francisco 49ers" }, { id: "Green Bay", name: "Green Bay Packers" }] },
        { id: 2, name: "Buccaneers vs. Lions", nextMatchId: 6, startTime: "2024-01-05", state: "PENDING", winner: "Detroit", participants: [{ id: "Tampa Bay", name: "Tampa Bay Buccaneers" }, { id: "Detroit", name: "Detroit Lions" }] },
        { id: 3, name: "Texans vs. Ravens", nextMatchId: 5, startTime: "2024-01-06", state: "PENDING", winner: "Baltimore", participants: [{ id: "Houston", name: "Houston Texans" }, { id: "Baltimore", name: "Baltimore Ravens" }] },
        { id: 4, name: "Chiefs vs. Bills", nextMatchId: 6, startTime: "2024-01-06", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "Buffalo", name: "Buffalo Bills" }] }
    ],
    secondRound: [
        { id: 5, name: "Ravens vs. Chiefs", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "Kansas City", participants: [{ id: "Baltimore", name: "Baltimore Ravens" }, { id: "Kansas City", name: "Kansas City Chiefs" }] },
        { id: 6, name: "Lions vs. 49ers", nextMatchId: 7, startTime: "2024-01-13", state: "PENDING", winner: "San Francisco", participants: [{ id: "Detroit", name: "Detroit Lions" }, { id: "San Francisco", name: "San Francisco 49ers" }] }
    ],
    finalRound: [
        { id: 7, name: "Chiefs vs. 49ers", nextMatchId: null, startTime: "2024-01-20", state: "PENDING", winner: "Kansas City", participants: [{ id: "Kansas City", name: "Kansas City Chiefs" }, { id: "San Francisco", name: "San Francisco 49ers" }] }
    ]
};

export const nflTeamColors = {
    "San Francisco 49ers": { backgroundColor: '#AA0000', color: '#B3995D' },
    "Green Bay Packers": { backgroundColor: '#203731', color: '#FFB612' },
    "Tampa Bay Buccaneers": { backgroundColor: '#D50A0A', color: '#34302B' },
    "Detroit Lions": { backgroundColor: '#0076B6', color: '#B0B7BC' },
    "Houston Texans": { backgroundColor: '#03202F', color: '#A71930' },
    "Baltimore Ravens": { backgroundColor: '#241773', color: '#9E7C0C' },
    "Kansas City Chiefs": { backgroundColor: '#E31837', color: '#FFB81C' },
    "Buffalo Bills": { backgroundColor: '#00338D', color: '#C60C30' }
};
