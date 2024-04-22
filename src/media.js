import React, { useState, useEffect } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link
} from '@mui/material';

// Mock data fetching function
const fetchArticles = () => {
  return Promise.resolve([
    { id: 1, title: "2024 NBA playoffs bracket, scores, results: Nuggets pull away from Lakers, Knicks take Game 1 vs. 76ers", url: "https://www.cbssports.com/nba/news/2024-nba-playoffs-bracket-scores-results-nuggets-pull-away-from-lakers-knicks-take-game-1-vs-76ers/" },
    { id: 2, title: "2024 NBA Playoff Matchups", url: "http://www.espn.com/nba/playoffs/matchups" },
    { id: 3, title: "NBA Playoffs odds, expert picks for Sunday’s games: Celtics-Heat, Bucks-Pacers, Thunder-Pelicans, Clips-Mavs", url: "https://theathletic.com/5423345/2024/04/21/nba-playoffs-odds-picks-celtics-heat-bucks-pacers-thunder-pelicans-clippers-mavericks/"},
    { id: 4, title: "Victor Wembanyama, Nikola Jokic headline NBA award finalists", url: "https://www.espn.com/nba/story/_/id/39991407/spurs-victor-wembanyama-nuggets-nikola-jokic-headline-nba-award-finalists" },
    { id: 5, title: "How to watch the 2024 NBA Playoffs tonight: Full schedule, channels, where to stream and more", url: "https://sports.yahoo.com/how-to-watch-the-2024-nba-playoffs-tonight-full-schedule-channels-where-to-stream-and-more-105501450.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAG3Eg9E0NwVrYdEj5U9q3TiSJ5OvyQhQD00cQHd6gtsG9ozk6KHsD7If_ekzn6IoZ5MZnlJJ5js9mnANebRu7AFIV37znQrvbjBfKTypGirMDLzKL_u16J6qJaP7GVBAE2AJTY6lILhm7NBfa8_JayOlaQUnADCrSKW_DHn5jBl8" },
    { id: 6, title: "NBA playoffs: Clippers dismantle Mavericks with Kawhi Leonard in street clothes", url: "https://sports.yahoo.com/nba-playoffs-clippers-dismantle-mavericks-with-kawhi-leonard-in-street-clothes-220404781.html"},
    { id: 7, title: "Thunder enter NBA playoffs respectful of everyone but fearful of no one", url: "https://theathletic.com/5432337/2024/04/21/thunder-pelicans-nba-playoffs/" },
    { id: 8, title: "5 teams that went from lottery to 2024 NBA Playoffs", url: "https://www.nba.com/news/5-teams-that-went-from-lottery-to-2024-nba-playoffs" },
    { id: 9, title: "Should Teams Consider More Current NBA Playoff Tendencies When Evaluating Prospects?", url: "https://www.si.com/nba/draft/newsfeed/playoff-tendacies-draft"},
    { id: 10, title: "Defending NBA champs Denver beat LeBron’s Lakers 114-103 in playoff opener", url: "https://www.aljazeera.com/sports/2024/4/21/defending-nba-champs-denver-beat-lebrons-lakers-114-103-in-playoff-opener" },
    { id: 11, title: "NBA Playoff Bandwagon Power Rankings", url: "https://bleacherreport.com/articles/10117273-nba-playoff-bandwagon-power-rankings" },
    { id: 12, title: "Ranking the 8 first-round matchups in the 2024 NBA playoffs", url: "https://www.nbcphiladelphia.com/news/sports/nba/ranking-first-round-matchups-2024-nba-playoffs/3835057/"},
  ]);
};

const ArticleTable = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell component="th" scope="row">
                {article.title}
              </TableCell>
              <TableCell align="right">
                <Link href={article.url} target="_blank" rel="noopener noreferrer">
                  Open Article
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArticleTable;
