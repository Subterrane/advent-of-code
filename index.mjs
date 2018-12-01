import { input } from './input.mjs'

let sum;
const sumList = [];
const dupList = []; 

const process = start => {
    return input.split('\n').reduce((prev, cur) => {
        sum = parseInt(cur, 10) + prev;
        sumList.includes(sum) ? dupList.push(sum) : sumList.push(sum);
        return parseInt(cur, 10) + prev;
    }, start); 
};

let total = process(0);
while(!dupList.length) total = process(total);

console.log(dupList[0]);
console.log('end');