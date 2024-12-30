export interface Question {
    id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
}

export const QUIZ_DURATION = 5; //Minutes


export const questions: Question[] = [
    {
        id: 'y5q1',
        question: 'What is 123 + 456?',
        answers: ['579', '577', '580', '578'],
        correctAnswer: '579',
    },
    {
        id: 'y5q2',
        question: 'What is 735 - 248?',
        answers: ['487', '486', '489', '485'],
        correctAnswer: '487',
    },
    {
        id: 'y5q3',
        question: 'What is 12 x 12?',
        answers: ['144', '121', '156', '132'],
        correctAnswer: '144',
    },
    {
        id: 'y5q4',
        question: 'What is 144 ÷ 12?',
        answers: ['12', '11', '13', '10'],
        correctAnswer: '12',
    },
    {
        id: 'y5q5',
        question: 'What is the perimeter of a rectangle with length 10 cm and width 7 cm?',
        answers: ['34 cm', '32 cm', '36 cm', '38 cm'],
        correctAnswer: '34 cm',
    },
    {
        id: 'y5q6',
        question: 'What is the area of a square with side length 9 cm?',
        answers: ['81 cm²', '72 cm²', '85 cm²', '80 cm²'],
        correctAnswer: '81 cm²',
    },
    {
        id: 'y5q7',
        question: 'How many hours are there in 3 days?',
        answers: ['72', '70', '68', '74'],
        correctAnswer: '72',
    },
    {
        id: 'y5q8',
        question: 'If one apple costs £0.75, how much will 4 apples cost?',
        answers: ['£3.00', '£3.25', '£2.75', '£4.00'],
        correctAnswer: '£3.00',
    },
    {
        id: 'y5q9',
        question: 'What is 25% of 200?',
        answers: ['50', '25', '100', '75'],
        correctAnswer: '50',
    },
    {
        id: 'y5q10',
        question: 'What is the volume of a cuboid with length 5 cm, width 4 cm, and height 3 cm?',
        answers: ['60 cm³', '50 cm³', '65 cm³', '70 cm³'],
        correctAnswer: '60 cm³',
    },
    {
        id: 'y5q11',
        question: 'What is the smallest prime number greater than 10?',
        answers: ['11', '13', '12', '14'],
        correctAnswer: '11',
    },
    {
        id: 'y5q12',
        question: 'What is 10²?',
        answers: ['100', '110', '120', '101'],
        correctAnswer: '100',
    },
    {
        id: 'y5q13',
        question: 'What is the sum of 3/4 and 2/4?',
        answers: ['5/4', '3/2', '6/4', '7/4'],
        correctAnswer: '5/4',
    },
    {
        id: 'y5q14',
        question: 'Convert 3000 grams into kilograms.',
        answers: ['3 kg', '30 kg', '0.3 kg', '300 kg'],
        correctAnswer: '3 kg',
    },
    {
        id: 'y5q15',
        question: 'What is the value of π rounded to 2 decimal places?',
        answers: ['3.14', '3.15', '3.13', '3.12'],
        correctAnswer: '3.14',
    },
    {
        id: 'y5q16',
        question: 'What is the value of 16 ÷ 2?',
        answers: ['8', '6', '12', '7'],
        correctAnswer: '8',
    },
    {
        id: 'y5q17',
        question: 'How many angles does a hexagon have?',
        answers: ['6', '5', '7', '4'],
        correctAnswer: '6',
    },
    {
        id: 'y5q18',
        question: 'Which of the following fractions is equivalent to 1/2?',
        answers: ['2/4', '3/6', '4/8', 'All of the above'],
        correctAnswer: 'All of the above',
    },

    {
        id: 'y5q19',
        question: 'What is the square root of 64?',
        answers: ['8', '7', '6', '9'],
        correctAnswer: '8',
    },
    {
        id: 'y5q20',
        question: 'How many sides does a pentagon have?',
        answers: ['5', '4', '6', '7'],
        correctAnswer: '5',
    },
    {
        id: 'y5q21',
        question: 'Convert 2 meters into centimeters.',
        answers: ['200 cm', '20 cm', '2 cm', '100 cm'],
        correctAnswer: '200 cm',
    },
    {
        id: 'y5q22',
        question: 'What is the result of 45 ÷ 5?',
        answers: ['9', '8', '7', '10'],
        correctAnswer: '9',
    },
    {
        id: 'y5q23',
        question: 'What is the sum of angles in a triangle?',
        answers: ['180°', '90°', '360°', '270°'],
        correctAnswer: '180°',
    },
    {
        id: 'y5q24',
        question: 'What is 15% of 300?',
        answers: ['45', '30', '60', '50'],
        correctAnswer: '45',
    },
    {
        id: 'y5q25',
        question: 'What is 2³?',
        answers: ['8', '6', '9', '12'],
        correctAnswer: '8',
    },
    {
        id: 'y5q26',
        question: 'What is 14 + 27?',
        answers: ['41', '40', '39', '42'],
        correctAnswer: '41',
    },
    {
        id: 'y5q27',
        question: 'Which number is a prime number?',
        answers: ['7', '12', '9', '15'],
        correctAnswer: '7',
    },
    {
        id: 'y5q28',
        question: 'How many milliliters are there in 1 liter?',
        answers: ['1000', '100', '10', '1500'],
        correctAnswer: '1000',
    },
    {
        id: 'y5q29',
        question: 'What is the area of a rectangle with a length of 5 cm and a width of 3 cm?',
        answers: ['15 cm²', '10 cm²', '20 cm²', '12 cm²'],
        correctAnswer: '15 cm²',
    },
    {
        id: 'y5q30',
        question: 'What is the smallest even number?',
        answers: ['2', '0', '1', '4'],
        correctAnswer: '0',
    },
    {
        id: 'y5q31',
        question: 'What is 18 ÷ 2?',
        answers: ['9', '8', '10', '11'],
        correctAnswer: '9',
    },
    {
        id: 'y5q32',
        question: 'What is 7 x 8?',
        answers: ['56', '54', '60', '64'],
        correctAnswer: '56',
    },
    {
        id: 'y5q33',
        question: 'What is half of 50?',
        answers: ['25', '20', '30', '15'],
        correctAnswer: '25',
    },
    {
        id: 'y5q34',
        question: 'How many seconds are there in 1 hour?',
        answers: ['3600', '600', '1800', '1200'],
        correctAnswer: '3600',
    },
    {
        id: 'y5q35',
        question: 'What is 5 factorial (5!)?',
        answers: ['120', '24', '60', '100'],
        correctAnswer: '120',
    },
    {
        id: 'y5q36',
        question: 'Convert 1.5 kilograms into grams.',
        answers: ['1500 g', '15 g', '150 g', '1000 g'],
        correctAnswer: '1500 g',
    },
    {
        id: 'y5q37',
        question: 'What is the perimeter of a square with side length 6 cm?',
        answers: ['24 cm', '12 cm', '18 cm', '30 cm'],
        correctAnswer: '24 cm',
    },
    {
        id: 'y5q38',
        question: 'How many days are there in a leap year?',
        answers: ['366', '365', '364', '360'],
        correctAnswer: '366',
    },
    {
        id: 'y5q39',
        question: 'What is 100 ÷ 4?',
        answers: ['25', '20', '30', '24'],
        correctAnswer: '25',
    },
    {
        id: 'y5q40',
        question: 'What is (10 x 10) - 5?',
        answers: ['95', '100', '90', '85'],
        correctAnswer: '95',
    },
    {
        id: 'y5q41',
        question: 'How many edges does a cube have?',
        answers: ['12', '8', '6', '10'],
        correctAnswer: '12',
    },
    {
        id: 'y5q42',
        question: 'What is 7²?',
        answers: ['49', '42', '56', '48'],
        correctAnswer: '49',
    },
    {
        id: 'y5q43',
        question: 'What is 2.5 + 1.5?',
        answers: ['4', '3.5', '3', '5'],
        correctAnswer: '4',
    },
    {
        id: 'y5q44',
        question: 'Convert 5000 milliliters into liters.',
        answers: ['5 L', '0.5 L', '50 L', '1 L'],
        correctAnswer: '5 L',
    },
    {
        id: 'y5q45',
        question: 'What is 90% of 200?',
        answers: ['180', '190', '160', '170'],
        correctAnswer: '180',
    },
    {
        id: 'y5q46',
        question: 'What is 8 multiplied by 6?',
        answers: ['48', '42', '54', '36'],
        correctAnswer: '48',
    },
    {
        id: 'y5q47',
        question: 'How many corners does a cube have?',
        answers: ['8', '6', '4', '12'],
        correctAnswer: '8',
    },
    {
        id: 'y5q48',
        question: 'What is the value of π to 3 decimal places?',
        answers: ['3.142', '3.141', '3.143', '3.140'],
        correctAnswer: '3.142',
    },
    {
        id: 'y5q49',
        question: 'What is the cube of 3?',
        answers: ['27', '15', '18', '30'],
        correctAnswer: '27',
    },
    {
        id: 'y5q50',
        question: 'What is the square of 11?',
        answers: ['121', '110', '100', '111'],
        correctAnswer: '121',
    },
];