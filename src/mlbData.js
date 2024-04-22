export const rounds = {
    firstRound: [
        { id: 1, name: "Astros vs. Twins", nextMatchId: 5, startTime: "2023-10-04", state: "PENDING", winner: "Astros", participants: [{ id: "Houston", name: "Houston Astros" }, { id: "Minnesota", name: "Minnesota Twins" }] },
        { id: 2, name: "Rangers vs. Orioles", nextMatchId: 5, startTime: "2023-10-04", state: "PENDING", winner: "Rangers", participants: [{ id: "Texas", name: "Texas Rangers" }, { id: "Baltimore", name: "Baltimore Orioles" }] },
        { id: 3, name: "Dodgers vs. Diamondbacks", nextMatchId: 6, startTime: "2023-10-05", state: "PENDING", winner: "Diamondbacks", participants: [{ id: "Los Angeles", name: "Los Angeles Dodgers" }, { id: "Arizona", name: "Arizona Diamondbacks" }] },
        { id: 4, name: "Braves vs. Phillies", nextMatchId: 6, startTime: "2023-10-05", state: "PENDING", winner: "Phillies", participants: [{ id: "Atlanta", name: "Atlanta Braves" }, { id: "Philadelphia", name: "Philadelphia Phillies" }] }
    ],
    secondRound: [
        { id: 5, name: "Astros vs. Rangers", nextMatchId: 7, startTime: "2023-10-12", state: "PENDING", winner: "Astros", participants: [{ id: "Houston", name: "Houston Astros" }, { id: "Texas", name: "Texas Rangers" }] },
        { id: 6, name: "Diamondbacks vs. Phillies", nextMatchId: 7, startTime: "2023-10-12", state: "PENDING", winner: "Diamondbacks", participants: [{ id: "Arizona", name: "Arizona Diamondbacks" }, { id: "Philadelphia", name: "Philadelphia Phillies" }] }
    ],
    finalRound: [
        { id: 7, name: "Diamondbacks vs. Rangers", nextMatchId: null, startTime: "2023-10-20", state: "PENDING", winner: "Rangers", participants: [{ id: "Arizona", name: "Arizona Diamondbacks" }, { id: "Texas", name: "Texas Rangers" }] }
    ]
};

export const teamColors = {
    "Houston Astros": { backgroundColor: '#002D62', color: '#EB6E1F' },
    "Minnesota Twins": { backgroundColor: '#002B5C', color: '#D31145' },
    "Texas Rangers": { backgroundColor: '#003278', color: '#C0111F' },
    "Baltimore Orioles": { backgroundColor: '#DF4601', color: '#000000' },
    "Los Angeles Dodgers": { backgroundColor: '#005A9C', color: '#FFFFFF' },
    "Arizona Diamondbacks": { backgroundColor: '#A71930', color: '#E3D4AD' },
    "Atlanta Braves": { backgroundColor: '#13274F', color: '#CE1141' },
    "Philadelphia Phillies": { backgroundColor: '#E81828', color: '#002D72' }
};
