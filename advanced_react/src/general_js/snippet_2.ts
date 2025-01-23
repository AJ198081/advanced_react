let instructor = {
    firstName: "AJ",
    isInstructor: true,
    favouriteNumbers: [1, 2, 3, 4, 5]
}

console.log(instructor);

const keys = Object.keys(instructor);
keys

const values = Object.values(instructor);
values

const entries = Object.entries(instructor);
entries

entries.push(["lastName", "Lenovo"]);

entries

instructor

const entries1 = Object.entries(instructor);

entries1

const hasOwnProperty = instructor.hasOwnProperty("firstName");

hasOwnProperty

const newInstructor = {...instructor, lastName: "Lenovo"};
newInstructor

const maxvalue = Number.MAX_VALUE;
maxvalue

const minvalue = Number.MIN_VALUE;
minvalue



