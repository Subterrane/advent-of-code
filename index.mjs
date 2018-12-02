import { input } from './input.mjs'

const test = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

const compare = (a, b) => {
    let diffs = 0;
    for (let ix = 0; ix < a.length; ix++) {
        if (a[ix] !== b[ix])++diffs;
        if (diffs > 1) break;
    }
    return diffs === 1;
};

const same = (a, b) => {
    let sames = [];
    for (let ix = 0; ix < a.length; ix++) {
        if (a[ix] == b[ix]) sames.push(a[ix]);
    }
    return sames.join('');
};

const process = a => {
    let l = a.split('\n');
    let r = null;
    while (l.length) {
        const t = l.pop();

        const m = l.reduce((a, c) => {
            const r = compare(t, c);
            if (r) a = c;
            return a;
        }, '');

        if (m.length > 0) r = [t, m];
    }
    return r;
};

const p = process(input);
const r = same(p[0], p[1]);

console.log(r);
console.log('end');