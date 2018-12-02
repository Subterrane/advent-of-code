import { input } from './input.mjs'

let tw = 0, th = 0;

input.split('\n').map(id =>
    Object.entries(id
        .split('')
        .reduce((p, c) => { p[c] = p[c] ? ++p[c] : 1; return p; }, {}))
        .filter(p => p[1] == 2 || p[1] == 3)
        .map(p => p[1])
        .sort()
        .filter((el, pos, ary) => !pos || el != ary[pos - 1])
        .forEach(el => el == 2 ? ++tw : el == 3 ? ++th : void 0));

console.log(tw * th);