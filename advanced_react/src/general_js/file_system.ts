import fs from 'fs';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

enum MatchResult {
    HOME_WINS = 'H',
    AWAY_WINS = 'A',
    DRAW = 'D',
}

const footballData = fs.readFileSync('../advanced_react/src/assets/football.csv', 'utf-8');
const matchDates = footballData.split('\n').map(line => line.split(','))
    .map(line => line[0]);
console.log(matchDates);

matchDates
    .forEach(line => console.log(`${line} => ${dayjs(line, 'DD/MM/YYYY', false).format('DD/MM/YYYY HH:mm:ss Z')}`));
const TARGET_TEAM = 'Man United';

const winsForTeam = footballData.split('\n')
    .map(line => line.split(','))
    .reduce((acc, line) => {
        console.log(line);
        if (line[1] === TARGET_TEAM && line[line.length - 2] === MatchResult.HOME_WINS) {
            console.log(line[1], line[line.length - 2])
            return  {...acc, wins: acc.wins + 1} ;
        } else if (line[2] === TARGET_TEAM && line[line.length - 2] === MatchResult.AWAY_WINS) {
            return {...acc, wins: acc.wins + 1};
        } else {
            return acc;
        }
    }, {wins: 0, draws: 0, losses: 0});

console.log(winsForTeam.wins, winsForTeam.draws, winsForTeam.losses);

const date = dayjs('18/08/2018 10:00:00 +10:00', 'DD/MM/YYYY HH:mm:ss Z', false).tz('Australia/Sydney');
console.log(date.toString());
console.log(date.utc().toISOString());
console.log(date.toISOString());





