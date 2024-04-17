import * as React from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper 
} from '@mui/material';

function createData(Rk, Team, X, G, MP, FG, FGA, FGPer, TP, TPA, TPPer, TwP, TwPA, TwPPer, FT, FTA, FTPer, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS) {
  return { Rk, Team, X, G, MP, FG, FGA, FGPer, TP, TPA, TPPer, TwP, TwPA, TwPPer, FT, FTA, FTPer, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS };
}

const rows = [
  createData(1, 'Golden State Warriors', '@warriors', 82, 242.4, 42.5, 87.3, '.487', 13.1, 31.6, '.416', 29.4, 55.7, '.528', 16.7, 21.8, '.763', 10.0, 36.2, 46.2, 28.9, 8.4, 6.1, 15.2, 20.7, 114.9),
  createData(2, 'Oklahoma City Thunder', '@okcthunder', 82, 241.8, 41.1, 86.4, '.476', 8.3, 23.7, '.349', 32.9, 62.6, '.524', 19.7, 25.2, '.782', 13.1, 35.6, 48.6, 23.0, 7.4, 5.9, 15.9, 20.6, 110.2),
  createData(3, 'Houston Rockets', '@HoustonRockets', 82, 241.8, 37.7, 83.5, '.452', 10.7, 30.9, '.347', 27.0, 52.6, '.514', 20.4, 29.4, '.694', 11.3, 31.7, 43.1, 22.2, 10.0, 5.2, 15.9, 21.8, 106.5),
  createData(4, 'Boston Celtics', '@celtics', 82, 241.2, 39.2, 89.2, '.439', 8.7, 26.1, '.335', 30.5, 63.1, '.483', 18.5, 23.5, '.788', 11.6, 33.3, 44.9, 24.2, 9.2, 4.2, 13.7, 21.9, 105.7),
  createData(5, 'Portland Trail Blazers', '@trailblazers', 82, 241.5, 38.6, 85.9, '.450', 10.5, 28.5, '.370', 28.1, 57.4, '.490', 17.4, 23.0, '.754', 11.6, 33.9, 45.5, 21.3, 6.9, 4.6, 14.6, 21.7, 105.1),
  createData(6, 'Los Angeles Clippers', '@LAClippers', 82, 241.8, 38.3, 82.4, '.465', 9.7, 26.7, '.364', 28.6, 55.7, '.513', 18.2, 26.2, '.692', 8.8, 33.3, 42.0, 22.8, 8.6, 5.6, 13.0, 21.3, 104.5),
  createData(7, 'Cleveland Cavaliers', '@cavs', 82, 242.1, 38.7, 84.0, '.460', 10.7, 29.6, '.362', 27.9, 54.4, '.514', 16.3, 21.7, '.748', 10.6, 33.9, 44.5, 22.7, 6.7, 3.9, 13.6, 20.3, 104.3),
  createData(8, 'Dallas Mavericks', '@dallasmavs', 82, 244, 37.4, 84.1, 0.444, 9.8, 28.6, 0.344, 27.5, 55.6, 0.495, 17.7, 22.3, 0.794, 9.2, 33.9, 43.1, 22.1, 6.8, 3.7, 12.8, 19.5, 102.3),
  createData(9, 'Memphis Grizzlies', '@memgrizz', 82, 241.8, 36.8, 83.6, 0.44, 6.1, 18.5, 0.331, 30.7, 65.1, 0.471, 19.3, 24.7, 0.783, 11.2, 30.5, 41.6, 20.7, 8.8, 4.3, 13.3, 21.7, 99.1),
  createData(10, 'San Antonio Spurs', '@spurs', 82, 240.3, 40.1, 82.9, 0.484, 7, 18.5, 0.375, 33.2, 64.4, 0.515, 16.4, 20.4, 0.803, 9.4, 34.5, 43.9, 24.5, 8.3, 5.9, 13.1, 17.5, 103.5),
  createData(11, 'Toronto Raptors', '@Raptors', 82, 241.2, 36.7, 81.3, 0.451, 8.6, 23.4, 0.37, 28, 58, 0.483, 20.8, 26.7, 0.777, 10.2, 33.2, 43.4, 18.7, 7.8, 5.5, 13.1, 19.6, 102.7),
  createData(12, 'Miami Heat', '@MiamiHEAT', 82, 241.8, 38.4, 81.7, 0.47, 6.1, 18, 0.336, 32.3, 63.6, 0.508, 17.1, 23, 0.744, 9.8, 34.3, 44.1, 20.8, 6.7, 6.5, 14.1, 18.3, 100),
  createData(13, 'Atlanta Hawks', '@ATLHawks', 82, 241.8, 38.6, 84.4, 0.458, 9.9, 28.4, 0.35, 28.7, 56.1, 0.512, 15.6, 20, 0.783, 8.3, 33.8, 42.1, 25.6, 9.1, 5.9, 15, 19.1, 102.8),
  createData(14, 'Charlotte Hornets', '@hornets', 82, 242.1, 37, 84.4, 0.439, 10.6, 29.4, 0.362, 26.4, 55, 0.479, 18.7, 23.7, 0.79, 9, 35, 43.9, 21.7, 7.3, 5.3, 12.6, 18.1, 103.4),
  createData(15, 'Indiana Pacers', '@Pacers', 82, 242.4, 38.3, 85.2, 0.45, 8.1, 23, 0.351, 30.2, 62.1, 0.486, 17.4, 22.8, 0.764, 10.3, 33.9, 44.2, 21.2, 9, 4.8, 14.9, 20, 102.2),
  createData(16, 'Detroit Pistons', '@DetroitPistons', 82, 242.4, 37.9, 86.4, 0.439, 9, 26.2, 0.345, 28.9, 60.2, 0.48, 17.1, 25.5, 0.668, 12.5, 33.9, 46.3, 19.4, 7, 3.7, 13.5, 19, 102)
];



export default function StatsTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="basketball stats table">
          <TableHead>
            <TableRow>
              <TableCell>Rk</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>X</TableCell>
              <TableCell>G</TableCell>
              <TableCell>MP</TableCell>
              <TableCell>FG</TableCell>
              <TableCell>FGA</TableCell>
              <TableCell>FG%</TableCell>
              <TableCell>3P</TableCell>
              <TableCell>3PA</TableCell>
              <TableCell>3P%</TableCell>
              <TableCell>2P</TableCell>
              <TableCell>2PA</TableCell>
              <TableCell>2P%</TableCell>
              <TableCell>FT</TableCell>
              <TableCell>FTA</TableCell>
              <TableCell>FT%</TableCell>
              <TableCell>ORB</TableCell>
              <TableCell>DRB</TableCell>
              <TableCell>TRB</TableCell>
              <TableCell>AST</TableCell>
              <TableCell>STL</TableCell>
              <TableCell>BLK</TableCell>
              <TableCell>TOV</TableCell>
              <TableCell>PF</TableCell>
              <TableCell>PTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Rk}>
                <TableCell>{row.Rk}</TableCell>
                <TableCell><a href={`https://www.foxsports.com/nba/${row.Team.replace(/\s+/g, '-').toLowerCase()}-team`} target="_blank">{row.Team}</a></TableCell>
                <TableCell><a href={`https://www.twitter.com/${row.X}`} target="_blank">{row.X}</a></TableCell>
                <TableCell>{row.G}</TableCell>
                <TableCell>{row.MP}</TableCell>
                <TableCell>{row.FG}</TableCell>
                <TableCell>{row.FGA}</TableCell>
                <TableCell>{row.FGPer}</TableCell>
                <TableCell>{row.TP}</TableCell>
                <TableCell>{row.TPA}</TableCell>
                <TableCell>{row.TPPer}</TableCell>
                <TableCell>{row.TwP}</TableCell>
                <TableCell>{row.TwPA}</TableCell>
                <TableCell>{row.TwPPer}</TableCell>
                <TableCell>{row.FT}</TableCell>
                <TableCell>{row.FTA}</TableCell>
                <TableCell>{row.FTPer}</TableCell>
                <TableCell>{row.ORB}</TableCell>
                <TableCell>{row.DRB}</TableCell>
                <TableCell>{row.TRB}</TableCell>
                <TableCell>{row.AST}</TableCell>
                <TableCell>{row.STL}</TableCell>
                <TableCell>{row.BLK}</TableCell>
                <TableCell>{row.TOV}</TableCell>
                <TableCell>{row.PF}</TableCell>
                <TableCell>{row.PTS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
