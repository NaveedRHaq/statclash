export const rounds = {
    firstRound: [
        { id: 1, name: "Cavaliers vs. Pistons", nextMatchId: 5, startTime: "2016-04-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Detroit", name: "Detroit Pistons" }] },
        { id: 2, name: "Raptors vs. Pacers", nextMatchId: 6, startTime: "2016-04-16", state: "PENDING", winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Indiana", name: "Indiana Pacers" }] },
        { id: 3, name: "Heat vs. Hornets", nextMatchId: 6, startTime: "2016-04-17", state: "PENDING", winner: "Miami", participants: [{ id: "Miami", name: "Miami Heat" }, { id: "Charlotte", name: "Charlotte Hornets" }] },
        { id: 4, name: "Hawks vs. Celtics", nextMatchId: 5, startTime: "2016-04-16", state: "PENDING", winner: "Atlanta", participants: [{ id: "Boston", name: "Boston Celtics" }, { id: "Atlanta", name: "Atlanta Hawks" }] }
    ],
    secondRound: [
        { id: 5, name: "Cavaliers vs. Hawks", nextMatchId: 7, startTime: "2016-05-02", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Atlanta", name: "Atlanta Hawks" }] },
        { id: 6, name: "Raptors vs. Heat", nextMatchId: 7, startTime: "2016-05-03", state: "PENDING", winner: "Toronto", participants: [{ id: "Toronto", name: "Toronto Raptors" }, { id: "Miami", name: "Miami Heat" }] }
    ],
    thirdRound: [
        { id: 7, name: "Cavaliers vs. Raptors", nextMatchId: null, startTime: "2016-05-17", state: "PENDING", winner: "Cleveland", participants: [{ id: "Cleveland", name: "Cleveland Cavaliers" }, { id: "Toronto", name: "Toronto Raptors" }] }
    ]
};

export const teamColors = {
    "Cleveland Cavaliers": { backgroundColor: '#6F263D', color: '#FFB81C' },
    "Detroit Pistons": { backgroundColor: '#C8102E', color: '#FFFFFF' },
    "Toronto Raptors": { backgroundColor: '#CE1141', color: '#FFFFFF' },
    "Indiana Pacers": { backgroundColor: '#002D62', color: '#FDBB30' },
    "Miami Heat": { backgroundColor: '#98002E', color: '#F9A01B' },
    "Charlotte Hornets": { backgroundColor: '#1D1160', color: '#00788C' },
    "Boston Celtics": { backgroundColor: '#007A33', color: '#FFFFFF' },
    "Atlanta Hawks": { backgroundColor: '#E03A3E', color: '#C1D32F' }
};
