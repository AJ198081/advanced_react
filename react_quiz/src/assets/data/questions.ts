export interface Question {
    id: string;
    text: string;
    answers: string[];
    correctAnswer: string;
}

export const QUIZ_DURATION = 20; //Minutes

export const mathQuestions: Question[] = [
    {
        id: 'm1',
        text: 'What is 47 + 26?',
        answers: ['73', '72', '71', '74'],
        correctAnswer: '73',
    },
    {
        id: 'm2',
        text: 'What is 56 - 39?',
        answers: ['17', '18', '19', '16'],
        correctAnswer: '17',
    },
    {
        id: 'm3',
        text: 'What is 8 x 7?',
        answers: ['54', '56', '49', '63'],
        correctAnswer: '56',
    },
    {
        id: 'm4',
        text: 'What is 64 ÷ 8?',
        answers: ['7', '8', '9', '6'],
        correctAnswer: '8',
    },
    {
        id: 'm5',
        text: 'What is the perimeter of a square with side length 5 cm?',
        answers: ['20 cm', '25 cm', '15 cm', '10 cm'],
        correctAnswer: '20 cm',
    },
    {
        id: 'm6',
        text: 'What is the area of a rectangle with length 8 cm and width 3 cm?',
        answers: ['22 cm²', '24 cm²', '20 cm²', '26 cm²'],
        correctAnswer: '24 cm²',
    },
    {
        id: 'm7',
        text: 'How many minutes are there in 2 hours?',
        answers: ['100', '120', '140', '110'],
        correctAnswer: '120',
    },
    {
        id: 'm8',
        text: 'What is 3/4 of 40?',
        answers: ['20', '30', '25', '35'],
        correctAnswer: '30',
    },
    {
        id: 'm9',
        text: 'How many edges does a cube have?',
        answers: ['12', '8', '16', '10'],
        correctAnswer: '12',
    },
    {
        id: 'm10',
        text: 'What is the value of 36 ÷ 9?',
        answers: ['4', '5', '6', '3'],
        correctAnswer: '4',
    },
    {
        id: 'm11',
        text: 'What is half of 84?',
        answers: ['41', '42', '43', '44'],
        correctAnswer: '42',
    },
    {
        id: 'm12',
        text: 'What is 7 squared (7²)?',
        answers: ['49', '56', '42', '72'],
        correctAnswer: '49',
    },
    {
        id: 'm13',
        text: 'How much is 500 - 176?',
        answers: ['324', '328', '340', '326'],
        correctAnswer: '324',
    },
    {
        id: 'm14',
        text: 'If a triangle has sides of 3 cm, 4 cm, and 5 cm, what is its perimeter?',
        answers: ['10 cm', '11 cm', '12 cm', '13 cm'],
        correctAnswer: '12 cm',
    },
    {
        id: 'm15',
        text: 'How many days are there in 3 weeks?',
        answers: ['18', '20', '21', '24'],
        correctAnswer: '21',
    },
    {
        id: 'm16',
        text: 'What is the next multiple of 6 after 48?',
        answers: ['54', '60', '56', '50'],
        correctAnswer: '54',
    },
    {
        id: 'm17',
        text: 'How many lines of symmetry does a regular hexagon have?',
        answers: ['3', '4', '5', '6'],
        correctAnswer: '6',
    },
    {
        id: 'm18',
        text: 'What is the sum of angles in a triangle?',
        answers: ['360°', '270°', '180°', '90°'],
        correctAnswer: '180°',
    },
    {
        id: 'm19',
        text: 'What is 15% of 200?',
        answers: ['20', '25', '30', '35'],
        correctAnswer: '30',
    },
    {
        id: 'm20',
        text: 'What is the volume of a cube with side length 4 cm?',
        answers: ['64 cm³', '48 cm³', '56 cm³', '60 cm³'],
        correctAnswer: '64 cm³',
    },
];
/*
export const questions: Question[] = [
    {
        id: 'q1',
        text: 'Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with help of imperative code.',
            'A library used for building mobile applications only.',
        ],
    },
    {
        id: 'q2',
        text: 'What purpose do React hooks serve?',
        answers: [
            'Enabling the use of state and other React features in functional components.',
            'Creating responsive layouts in React applications.',
            'Handling errors within the application.',
            'Part of the Redux library for managing global state.',
        ],
    },
    {
        id: 'q3',
        text: 'Can you identify what JSX is?',
        answers: [
            'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            'A JavaScript library for building dynamic user interfaces.',
            'A specific HTML version that was explicitly created for React.',
            'A tool for making HTTP requests in a React application.',
        ],
    },
    {
        id: 'q4',
        text: 'What is the most common way to create a component in React?',
        answers: [
            'By defining a JavaScript function that returns a renderable value.',
            'By defining a custom HTML tag in JavaScript.',
            'By creating a file with a .jsx extension.',
            'By using the "new" keyword followed by the component name.',
        ],
    },
    {
        id: 'q5',
        text: 'What does the term "React state" imply?',
        answers: [
            'An object in a component that holds values and may cause the component to render on change.',
            'The lifecycle phase a React component is in.',
            'The overall status of a React application, including all props and components.',
            'A library for managing global state in React applications.',
        ],
    },
    {
        id: 'q6',
        text: 'How do you typically render list content in React apps?',
        answers: [
            'By using the map() method to iterate over an array of data and returning JSX.',
            'By using the for() loop to iterate over an array of data and returning JSX.',
            'By using the forEach() method to iterate over an array of data and returning JSX.',
            'By using the loop() method to iterate over an array of data and returning JSX.',
        ],
    },
    {
        id: 'q7',
        text: 'Which approach can NOT be used to render content conditionally?',
        answers: [
            'Using a the #if template syntax.',
            'Using a ternary operator.',
            'Using the && operator.',
            'Using an if-else statement.',
        ],
    },
];*/
