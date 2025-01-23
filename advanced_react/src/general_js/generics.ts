import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

function mergeObjects<T extends U, U>(objA: T, objB: U): T {
    // return Object.assign(objA, objB);
    return { ...objA, ...objB};
}

function mergeDisparateObjects<T extends object, U extends object>(objA: T, objB: U): T & U {
    return { ...objA, ...objB};
}

const mergedObjects = mergeObjects({name: "AJ", age: 43}, {age: 44});
console.log(mergedObjects);


const mergedDisparateObjects = mergeDisparateObjects({name: "AJ", age: 43}, {age: 44, gender: "male"});
console.log(mergedDisparateObjects);

const mergedDisparateObjects2 = mergeDisparateObjects({name: "AJ", age: 43}, {age: 44, gender: "male"});
console.log(mergedDisparateObjects2);

function countAndDescribe<T extends object>(element: T): void {
    console.log(Object.keys(element).length);
    console.log(typeof element);
}

countAndDescribe({name: "AJ", age: 43});

countAndDescribe(["AJ", 43]);

function extractAndConvert<T extends object>(objA: T, key: keyof T) {
    return objA[key];
}

function extractAndConvertRefined<T extends object, U extends keyof T>(objA: T, key: U) {
    return objA[key];
}

const extracted = extractAndConvert({name: "AJ", age: 43}, "name");
console.log(extracted);

const extracted2 = extractAndConvertRefined({name: "AJ", age: 43}, "age");
console.log(extracted2);

const date = new Date();
console.log(date);

console.log(dayjs(date).format());

dayjs.extend(utc);
dayjs.extend(timezone);

console.log(dayjs.tz("Asia/Kolkata").format());




