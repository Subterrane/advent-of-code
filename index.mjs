import { input } from './input.mjs'

let sum;
const sumList = new Set([]);
const dupList = new Set([]); 

const process = start => {
    return input.split('\n').reduce((prev, cur) => {
        sum = parseInt(cur, 10) + prev;
        sumList.has(sum) ? dupList.add(sum) : sumList.add(sum);
        return parseInt(cur, 10) + prev;
    }, start); 
};

let total = process(0);
while(!dupList.length) total = process(total);

console.log(dupList[0]);
console.log('end');