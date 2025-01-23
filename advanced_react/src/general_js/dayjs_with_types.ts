import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// console.log(dayjs().tz("Asia/Kolkata").format());

console.log('Hello');
dayjs.extend(utc);
dayjs.extend(timezone);
console.log(dayjs().format('YYYY-MM-DD HH:mm:sss'));

const date = dayjs();
const tomorrow = date.add(1, 'day');

console.log(tomorrow.format('DD/MM/YYYY HH:mm:ss Z'));
console.log(tomorrow.utc().format('DD/MM/YYYY HH:mm:ss Z'));

const tomorrowInCalcutta = tomorrow.tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss Z');
console.log(tomorrowInCalcutta);

console.log(dayjs.utc().format());

const colors: Array<string> = ['red', 'green', 'blue'];
console.log(colors.map(color => color.toUpperCase()).join(', '));

const point: { x: number, y: number } = { x: 10, y: 20 };
console.log(point.y);

console.log(dayjs.utc().format());

interface User {
    name: string;
    age: number;
}

const json: string = '{"name": "AJ", "age": 43}';
console.log(JSON.parse(json));
const aj = JSON.parse(json) as User;
console.log(aj.name);
aj.age = 44;
console.log(aj.age);

const parsedValue = JSON.parse(`43`);
console.log(typeof parsedValue);
console.log(parsedValue.toString());

if (parsedValue) {
    console.log('true');
}

let value;
value = 42;
value = 41
value = '40'
console.log(typeof value);

const number : Array<number | string> = [1, 2, 3];
number.push('4');
console.log(number);

const number2 : number[] | string [] = [1, 2, 3];
// number2.push('4');
console.log(number2);

interface Weather {
    date: string,
    temperature: number,
    weather: string
}

const forecast: Weather = {
    date: '2021-01-01',
    temperature: 20,
    weather: 'sunny'
}

console.log(forecast.date);
console.log(forecast.temperature);
console.log(forecast.weather);

const logWeather = (forecast: { date: string, temperature: number, weather: string }) => {
    console.log(forecast.date);
    console.log(forecast.temperature);
}

const destructuredForecast = ({date, temperature, weather}: Weather) => {
    console.log(`${date} ${temperature} ${weather}`);
};

destructuredForecast(forecast);
logWeather(forecast);

