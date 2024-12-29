export interface Question {
    id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
}

export const QUIZ_DURATION = 5; //Minutes


export const mathQuestions: Question[] = [
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
    // Repeat similar structure for 95 more questions
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
];