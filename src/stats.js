import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';

function createNBAData(Rk, Team, G, MP, FG, FGA, FGPer, TP, TPA, TPPer, TwP, TwPA, TwPPer, FT, FTA, FTPer, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS) {
  return { Rk, Team, G, MP, FG, FGA, FGPer, TP, TPA, TPPer, TwP, TwPA, TwPPer, FT, FTA, FTPer, ORB, DRB, TRB, AST, STL, BLK, TOV, PF, PTS };
}

function createMLBData(Rk, Team, G, AB, R, H, HR, RBI, BB, SO, BA, OBP, SLG, OPS) {
  return { Rk, Team, G, AB, R, H, HR, RBI, BB, SO, BA, OBP, SLG, OPS };
}

function createNFLData(Rk, Team, G, PF, PA, TD, Yds, RushYds, PassYds, Int, Sacks, Turnovers, CompPct, AvgYPC, ThirdDownPct) {
  return { Rk, Team, G, PF, PA, TD, Yds, RushYds, PassYds, Int, Sacks, Turnovers, CompPct, AvgYPC, ThirdDownPct };
}

const nflRows = [
  createNFLData(1, 'Kansas City Chiefs', 16, 565, 350, 60, 6000, 2100, 3900, 12, 45, 16, .700, 5.1, .420),
  createNFLData(2, 'Buffalo Bills', 16, 510, 310, 55, 5800, 2200, 3600, 10, 50, 14, .675, 4.9, .460),
  createNFLData(3, 'Green Bay Packers', 16, 480, 300, 52, 5700, 1800, 3900, 9, 40, 12, .660, 4.8, .440),
  createNFLData(4, 'Tampa Bay Buccaneers', 16, 470, 320, 51, 5600, 1700, 3900, 11, 38, 15, .645, 4.6, .430),
  createNFLData(5, 'Baltimore Ravens', 16, 460, 290, 48, 5500, 2500, 3000, 9, 37, 12, .655, 5.2, .450),
  createNFLData(6, 'Los Angeles Rams', 16, 450, 330, 45, 5400, 1500, 3900, 14, 35, 20, .630, 4.3, .400),
  createNFLData(7, 'Seattle Seahawks', 16, 440, 310, 43, 5200, 2000, 3200, 13, 42, 18, .640, 4.1, .390),
  createNFLData(8, 'Cleveland Browns', 16, 430, 340, 42, 5100, 2300, 2800, 12, 44, 17, .615, 4.7, .410),
  createNFLData(9, 'New England Patriots', 16, 420, 300, 40, 5000, 1800, 3200, 10, 35, 15, .600, 4.2, .380),
  createNFLData(10, 'San Francisco 49ers', 16, 410, 310, 38, 4900, 2200, 2700, 8, 41, 14, .620, 4.4, .400),
  createNFLData(11, 'Dallas Cowboys', 16, 400, 320, 36, 4800, 2000, 2800, 11, 39, 16, .610, 4.5, .370),
  createNFLData(12, 'Pittsburgh Steelers', 16, 390, 350, 34, 4700, 1900, 2800, 13, 36, 20, .590, 4.0, .350),
  createNFLData(13, 'Miami Dolphins', 16, 380, 330, 32, 4600, 1700, 2900, 15, 34, 18, .570, 3.8, .330),
  createNFLData(14, 'Chicago Bears', 16, 370, 340, 30, 4500, 1600, 2900, 17, 31, 22, .560, 3.9, .320),
  createNFLData(15, 'Indianapolis Colts', 16, 360, 360, 28, 4400, 2100, 2300, 19, 30, 25, .550, 3.7, .310),
  createNFLData(16, 'New York Giants', 16, 350, 370, 26, 4300, 1400, 2900, 20, 25, 28, .530, 3.5, .300),
  createNFLData(17, 'Denver Broncos', 16, 345, 360, 25, 4250, 1300, 2950, 21, 29, 26, .510, 3.3, .290),
  createNFLData(18, 'Philadelphia Eagles', 16, 340, 330, 24, 4200, 1200, 3000, 18, 28, 20, .520, 3.6, .315),
  createNFLData(19, 'Minnesota Vikings', 16, 335, 345, 23, 4100, 1700, 2400, 19, 32, 19, .505, 3.7, .325),
  createNFLData(20, 'Washington Commanders', 16, 330, 380, 22, 4000, 1600, 2400, 23, 30, 24, .490, 3.5, .295),
  createNFLData(21, 'Las Vegas Raiders', 16, 325, 370, 21, 3950, 1500, 2450, 20, 31, 23, .475, 3.4, .280),
  createNFLData(22, 'Tennessee Titans', 16, 320, 340, 20, 3900, 1800, 2100, 17, 33, 21, .500, 4.0, .345),
  createNFLData(23, 'New Orleans Saints', 16, 315, 335, 19, 3850, 1400, 2450, 22, 28, 25, .480, 3.2, .310),
  createNFLData(24, 'Houston Texans', 16, 310, 400, 18, 3800, 1350, 2450, 24, 26, 27, .460, 3.1, .260),
  createNFLData(25, 'Detroit Lions', 16, 305, 420, 17, 3750, 1200, 2550, 25, 24, 30, .450, 3.4, .270),
  createNFLData(26, 'Carolina Panthers', 16, 300, 430, 16, 3700, 1100, 2600, 28, 22, 32, .435, 3.3, .250),
  createNFLData(27, 'New York Jets', 16, 295, 440, 15, 3650, 1400, 2250, 27, 20, 29, .420, 3.0, .240),
  createNFLData(28, 'Atlanta Falcons', 16, 290, 450, 14, 3600, 1000, 2600, 30, 18, 31, .410, 2.9, .220),
  createNFLData(29, 'Jacksonville Jaguars', 16, 285, 460, 13, 3550, 950, 2600, 29, 16, 34, .400, 2.8, .210),
  createNFLData(30, 'Cincinnati Bengals', 16, 280, 470, 12, 3500, 900, 2600, 32, 14, 35, .390, 2.7, .200),
  createNFLData(31, 'Arizona Cardinals', 16, 275, 475, 11, 3450, 850, 2600, 31, 12, 38, .375, 2.6, .190),
  createNFLData(32, 'Los Angeles Chargers', 16, 270, 480, 10, 3400, 800, 2600, 33, 10, 40, .360, 2.5, .180),
];

const nbaRows = [
  createNBAData(1, 'Boston Celtics', 82, 241.2, 39.2, 89.2, '.439', 8.7, 26.1, '.335', 30.5, 63.1, '.483', 18.5, 23.5, '.788', 11.6, 33.3, 44.9, 24.2, 9.2, 4.2, 13.7, 21.9, 105.7),
  createNBAData(2, 'Dallas Mavericks', 82, 244.0, 37.4, 84.1, '.444', 9.8, 28.6, '.344', 27.5, 55.6, '.495', 17.7, 22.3, '.794', 9.2, 33.9, 43.1, 22.1, 6.8, 3.7, 12.8, 19.5, 102.3),
  createNBAData(3, 'Denver Nuggets', 82, 242.9, 41.2, 87.1, '.473', 7.9, 22.9, '.345', 33.3, 64.2, '.518', 17.0, 22.1, '.769', 10.8, 33.7, 44.5, 27.4, 8.0, 4.1, 13.9, 19.7, 107.3),
  createNBAData(4, 'New York Knicks', 82, 241.2, 37.6, 83.2, '.452', 7.7, 22.4, '.343', 29.9, 60.8, '.492', 17.5, 22.1, '.792', 10.2, 34.0, 44.2, 21.6, 6.5, 4.8, 12.9, 19.7, 100.4),
  createNBAData(5, 'Milwaukee Bucks', 82, 241.9, 40.4, 87.9, '.460', 11.2, 30.5, '.367', 29.2, 57.4, '.509', 18.6, 23.3, '.789', 9.6, 38.1, 47.7, 25.3, 7.6, 5.1, 13.2, 19.6, 110.6),
  createNBAData(6, 'Philadelphia 76ers', 82, 241.9, 39.3, 86.9, '.452', 11.0, 30.4, '.362', 28.3, 56.5, '.501', 17.8, 22.6, '.788', 9.5, 34.2, 43.7, 25.1, 8.2, 5.4, 14.4, 20.1, 107.4),
  createNBAData(7, 'Oklahoma City Thunder', 82, 241.8, 41.1, 86.4, '.476', 8.3, 23.7, '.349', 32.9, 62.6, '.524', 19.7, 25.2, '.782', 13.1, 35.6, 48.6, 23.0, 7.4, 5.9, 15.9, 20.6, 110.2),
  createNBAData(8, 'Phoenix Suns', 82, 241.0, 39.5, 85.9, '.460', 10.2, 27.4, '.373', 29.3, 58.5, '.501', 16.9, 21.7, '.778', 9.3, 34.4, 43.7, 27.0, 7.8, 4.5, 13.8, 20.3, 106.1),
  createNBAData(9, 'Los Angeles Lakers', 82, 241.2, 38.4, 85.7, '.448', 9.5, 27.9, '.340', 28.9, 57.8, '.500', 16.9, 21.4, '.790', 9.5, 34.6, 44.1, 24.5, 7.4, 4.9, 14.3, 21.1, 103.2),
  createNBAData(10, 'New Orleans Pelicans', 82, 242.4, 38.1, 87.6, '.435', 8.3, 25.3, '.328', 29.8, 62.3, '.479', 18.2, 23.8, '.763', 11.1, 35.2, 46.3, 26.8, 7.9, 5.2, 14.9, 20.4, 102.7),
  createNBAData(11, 'Orlando Magic', 82, 240.9, 38.0, 85.4, '.445', 8.2, 24.1, '.340', 29.8, 61.3, '.486', 17.4, 21.7, '.801', 10.5, 33.2, 43.7, 22.3, 7.2, 4.6, 14.2, 19.5, 101.6),
  createNBAData(12, 'Miami Heat', 82, 241.8, 38.4, 81.7, '.470', 6.1, 18.0, '.336', 32.3, 63.6, '.508', 17.1, 23.0, '.744', 9.8, 34.3, 44.1, 20.8, 6.7, 6.5, 14.1, 18.3, 100.0),
  createNBAData(13, 'LA Clippers', 82, 241.8, 38.3, 82.4, '.465', 9.7, 26.7, '.364', 28.6, 55.7, '.513', 18.2, 26.2, '.692', 8.8, 33.3, 42.0, 22.8, 8.6, 5.6, 13.0, 21.3, 104.5),
  createNBAData(14, 'Minnesota Timberwolves', 82, 241.6, 38.7, 88.1, '.440', 10.5, 29.9, '.351', 28.2, 58.2, '.485', 19.2, 24.5, '.784', 10.1, 33.7, 43.8, 23.7, 8.3, 4.7, 14.5, 20.8, 107.1),
  createNBAData(15, 'Sacramento Kings', 82, 242.4, 39.4, 86.2, '.457', 9.1, 26.8, '.340', 30.3, 59.4, '.510', 16.9, 22.5, '.752', 9.6, 34.7, 44.3, 23.8, 7.5, 4.3, 13.4, 19.9, 104.8),
  createNBAData(16, 'Indiana Pacers', 82, 242.4, 38.3, 85.2, '.450', 8.1, 23.0, '.351', 30.2, 62.1, '.486', 17.4, 22.8, '.764', 10.3, 33.9, 44.2, 21.2, 9.0, 4.8, 14.9, 20.0, 102.2),
  createNBAData(17, 'Atlanta Hawks', 82, 241.8, 38.6, 84.4, '.458', 9.9, 28.4, '.350', 28.7, 56.1, '.512', 15.6, 20, '.783', 8.3, 33.8, 42.1, 25.6, 9.1, 5.9, 15, 19.1, 102.8),
  createNBAData(18, 'Brooklyn Nets', 82, 242.1, 40.3, 88.9, '.453', 10.3, 29.7, '.347', 30.0, 59.2, '.506', 17.5, 22.9, '.765', 9.1, 34.8, 43.9, 23.7, 7.5, 4.6, 13.5, 20.8, 108.4),
  createNBAData(19, 'Chicago Bulls', 82, 241.5, 38.9, 85.6, '.454', 8.8, 25.2, '.350', 30.1, 60.4, '.498', 16.5, 21.3, '.775', 9.7, 35.1, 44.8, 23.2, 7.8, 4.7, 14.3, 18.9, 103.1),
  createNBAData(20, 'Cleveland Cavaliers', 82, 242.1, 38.7, 84.0, '.460', 10.7, 29.6, '.362', 27.9, 54.4, '.514', 16.3, 21.7, '.748', 10.6, 33.9, 44.5, 22.7, 6.7, 3.9, 13.6, 20.3, 104.3),
  createNBAData(21, 'Golden State Warriors', 82, 242.4, 42.5, 87.3, '.487', 13.1, 31.6, '.416', 29.4, 55.7, '.528', 16.7, 21.8, '.763', 10.0, 36.2, 46.2, 28.9, 8.4, 6.1, 15.2, 20.7, 114.9),
  createNBAData(22, 'Houston Rockets', 82, 241.8, 37.7, 83.5, '.452', 10.7, 30.9, '.347', 27.0, 52.6, '.514', 20.4, 29.4, '.694', 11.3, 31.7, 43.1, 22.2, 10.0, 5.2, 15.9, 21.8, 106.5),
  createNBAData(23, 'Charlotte Hornets', 82, 242.1, 37, 84.4, '.439', 10.6, 29.4, '.362', 26.4, 55, '.479', 18.7, 23.7, '.790', 9, 35, 43.9, 21.7, 7.3, 5.3, 12.6, 18.1, 103.4),
  createNBAData(24, 'San Antonio Spurs', 82, 240.3, 40.1, 82.9, '.484', 7.0, 18.5, '.375', 33.2, 64.4, '.515', 16.4, 20.4, '.803', 9.4, 34.5, 43.9, 24.5, 8.3, 5.9, 13.1, 17.5, 103.5),
  createNBAData(25, 'Toronto Raptors', 82, 241.2, 36.7, 81.3, '.451', 8.6, 23.4, '.370', 28.0, 58.0, '.483', 20.8, 26.7, '.777', 10.2, 33.2, 43.4, 18.7, 7.8, 5.5, 13.1, 19.6, 102.7),
  createNBAData(26, 'Utah Jazz', 82, 241.4, 38.3, 84.0, '.456', 11.2, 30.3, '.370', 27.1, 53.7, '.505', 16.8, 22.0, '.764', 8.7, 36.5, 45.2, 22.4, 8.5, 4.8, 14.5, 19.8, 104.6),
  createNBAData(27, 'Memphis Grizzlies', 82, 241.8, 36.8, 83.6, '.440', 6.1, 18.5, '.331', 30.7, 65.1, '.471', 19.3, 24.7, '.783', 11.2, 30.5, 41.6, 20.7, 8.8, 4.3, 13.3, 21.7, 99.1),
  createNBAData(28, 'Portland Trail Blazers', 82, 241.5, 38.6, 85.9, '.450', 10.5, 28.5, '.370', 28.1, 57.4, '.490', 17.4, 23.0, '.754', 11.6, 33.9, 45.5, 21.3, 6.9, 4.6, 14.6, 21.7, 105.1),
  createNBAData(29, 'Washington Wizards', 82, 241.3, 38.5, 85.1, '.453', 9.4, 25.8, '.365', 29.1, 59.3, '.491', 17.6, 23.4, '.752', 10.0, 33.3, 43.3, 25.2, 7.9, 4.4, 14.2, 20.5, 104.0),
  createNBAData(30, 'Detroit Pistons', 82, 242.4, 37.9, 86.4, '.439', 9.0, 26.2, '.345', 28.9, 60.2, '.480', 17.1, 25.5, '.668', 12.5, 33.9, 46.3, 19.4, 7.0, 3.7, 13.5, 19.0, 102.0),
];

const mlbRows = [
  createMLBData(1, 'Los Angeles Dodgers', 162, 5570, 980, 1456, 238, 925, 622, 1367, '.261', '.340', '.442', '.782'),
  createMLBData(2, 'New York Yankees', 162, 5400, 860, 1300, 240, 820, 600, 1380, '.240', '.320', '.450', '.770'),
  createMLBData(3, 'Houston Astros', 162, 5560, 870, 1490, 230, 880, 560, 1150, '.268', '.345', '.461', '.806'),
  createMLBData(4, 'Atlanta Braves', 162, 5498, 845, 1400, 220, 810, 590, 1250, '.255', '.330', '.440', '.770'),
  createMLBData(5, 'Boston Red Sox', 162, 5410, 830, 1385, 210, 800, 585, 1300, '.256', '.328', '.435', '.763'),
  createMLBData(6, 'Chicago Cubs', 162, 5430, 800, 1350, 200, 770, 620, 1350, '.249', '.325', '.430', '.755'),
  createMLBData(7, 'Chicago White Sox', 162, 5500, 810, 1400, 190, 780, 630, 1380, '.255', '.320', '.425', '.745'),
  createMLBData(8, 'Cincinnati Reds', 162, 5440, 790, 1360, 180, 750, 610, 1320, '.250', '.315', '.420', '.735'),
  createMLBData(9, 'Cleveland Guardians', 162, 5480, 780, 1390, 170, 740, 600, 1200, '.254', '.318', '.415', '.733'),
  createMLBData(10, 'Colorado Rockies', 162, 5420, 820, 1410, 195, 760, 580, 1160, '.260', '.332', '.445', '.777'),
  createMLBData(11, 'Detroit Tigers', 162, 5380, 750, 1300, 160, 700, 590, 1400, '.242', '.310', '.390', '.700'),
  createMLBData(12, 'Miami Marlins', 162, 5300, 730, 1280, 150, 690, 570, 1250, '.241', '.306', '.385', '.691'),
  createMLBData(13, 'Milwaukee Brewers', 162, 5450, 770, 1340, 180, 720, 650, 1450, '.246', '.322', '.410', '.732'),
  createMLBData(14, 'Minnesota Twins', 162, 5470, 790, 1365, 210, 750, 620, 1310, '.250', '.318', '.430', '.748'),
  createMLBData(15, 'New York Mets', 162, 5540, 840, 1380, 220, 790, 610, 1330, '.249', '.321', '.438', '.759'),
  createMLBData(16, 'Oakland Athletics', 162, 5390, 720, 1290, 140, 680, 580, 1380, '.239', '.304', '.378', '.682'),
  createMLBData(17, 'Philadelphia Phillies', 162, 5510, 830, 1420, 230, 800, 595, 1230, '.258', '.327', '.445', '.772'),
  createMLBData(18, 'Pittsburgh Pirates', 162, 5350, 710, 1270, 130, 660, 575, 1370, '.237', '.301', '.365', '.666'),
  createMLBData(19, 'San Diego Padres', 162, 5460, 780, 1340, 170, 730, 630, 1290, '.245', '.319', '.405', '.724'),
  createMLBData(20, 'San Francisco Giants', 162, 5490, 770, 1330, 190, 720, 640, 1250, '.242', '.323', '.418', '.741'),
  createMLBData(21, 'Seattle Mariners', 162, 5380, 760, 1305, 180, 710, 595, 1320, '.243', '.312', '.408', '.720'),
  createMLBData(22, 'St. Louis Cardinals', 162, 5450, 810, 1370, 200, 760, 615, 1280, '.251', '.320', '.430', '.750'),
  createMLBData(23, 'Tampa Bay Rays', 162, 5470, 820, 1350, 210, 770, 625, 1340, '.247', '.316', '.423', '.739'),
  createMLBData(24, 'Texas Rangers', 162, 5400, 850, 1385, 210, 780, 590, 1300, '.257', '.325', '.435', '.760'),
  createMLBData(25, 'Toronto Blue Jays', 162, 5460, 870, 1420, 230, 810, 600, 1200, '.260', '.334', '.446', '.780'),
  createMLBData(26, 'Washington Nationals', 162, 5400, 740, 1350, 160, 710, 580, 1350, '.250', '.312', '.390', '.702'),
  createMLBData(27, 'Kansas City Royals', 162, 5480, 780, 1380, 150, 720, 560, 1150, '.252', '.310', '.380', '.690'),
  createMLBData(28, 'Los Angeles Angels', 162, 5420, 800, 1360, 220, 750, 615, 1380, '.251', '.320', '.420', '.740'),
  createMLBData(29, 'Arizona Diamondbacks', 162, 5300, 720, 1250, 130, 650, 570, 1500, '.236', '.305', '.360', '.665'),
  createMLBData(30, 'Baltimore Orioles', 162, 5450, 760, 1320, 170, 700, 610, 1400, '.242', '.313', '.398', '.711'),
];

export default function StatsTable() {
  const [currentSport, setCurrentSport] = useState('NBA'); // 'NBA', 'MLB', 'NFL'

  const handleSportChange = (sport) => {
    setCurrentSport(sport);
  };

  return (
    <div>
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <Button variant="contained" onClick={() => handleSportChange('NBA')} style={{ marginRight: '10px' }}>
          Show NBA Stats
        </Button>
        <Button variant="contained" onClick={() => handleSportChange('MLB')} style={{ marginRight: '10px' }}>
          Show MLB Stats
        </Button>
        <Button variant="contained" onClick={() => handleSportChange('NFL')}>
          Show NFL Stats
        </Button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label={`${currentSport} stats table`}>
            <TableHead>
              <TableRow>
                <TableCell>Rk</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>G</TableCell>
                {currentSport === 'NBA' && (
                  <>
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
                  </>
                )}
                {currentSport === 'MLB' && (
                  <>
                    <TableCell>AB</TableCell>
                    <TableCell>R</TableCell>
                    <TableCell>H</TableCell>
                    <TableCell>HR</TableCell>
                    <TableCell>RBI</TableCell>
                    <TableCell>BB</TableCell>
                    <TableCell>SO</TableCell>
                    <TableCell>BA</TableCell>
                    <TableCell>OBP</TableCell>
                    <TableCell>SLG</TableCell>
                    <TableCell>OPS</TableCell>
                  </>
                )}
                {currentSport === 'NFL' && (
                  <>
                    <TableCell>PF</TableCell>
                    <TableCell>PA</TableCell>
                    <TableCell>TD</TableCell>
                    <TableCell>Yds</TableCell>
                    <TableCell>Rush Yds</TableCell>
                    <TableCell>Pass Yds</TableCell>
                    <TableCell>Int</TableCell>
                    <TableCell>Sacks</TableCell>
                    <TableCell>Turnovers</TableCell>
                    <TableCell>Comp %</TableCell>
                    <TableCell>Avg YPC</TableCell>
                    <TableCell>3rd Down %</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
            {(currentSport === 'NBA' ? nbaRows : (currentSport === 'MLB' ? mlbRows : nflRows)).map((row) => (
              <TableRow key={row.Rk}>
                <TableCell>{row.Rk}</TableCell>
                <TableCell>
                  <a href={`https://${currentSport === 'NBA' ? 'nba' : (currentSport === 'MLB' ? 'mlb' : 'nfl')}.com/${row.Team.replace(/\s+/g, '-').toLowerCase()}`}>
                    {row.Team}
                  </a>
                </TableCell>
                <TableCell>{row.G}</TableCell>
                {Object.keys(row).slice(3).map(key => (
                  <TableCell key={key}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}