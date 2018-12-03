import { input } from './input.mjs'

const test = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

const test2 = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
#4 @ 0,0: 2x4`;

const test3 = `#1 @ 0,0: 4x4
#2 @ 5,5: 4x4
#3 @ 10,10: 4x4`;

const test4 = `#1 @ 0,0: 2x2
#2 @ 0,0: 2x2
#3 @ 2,2: 2x2
#4 @ 2,2: 2x2`;

class Claim {
    constructor(claimString) {
        const claimArr = claimString.split(' ');

        this.id = parseInt(claimArr[0].substring(1), 10);
        this.left = parseInt(claimArr[2].split(',')[0], 10);
        this.top = parseInt(claimArr[2].split(',')[1], 10);
        this.width = parseInt(claimArr[3].split('x')[0], 10);
        this.height = parseInt(claimArr[3].split('x')[1], 10);
        this.bottom = this.top + this.height - 1;
        this.right = this.left + this.width - 1;
        this.squares = [];
        this.overlaps = [];
    }

    calcSquares() {
        const start = this.top * 1000 + this.left;

        for (var iy = 0; iy < this.height; iy++) {
            const rowStart = start + (iy * 1000);
            for (var ix = rowStart; ix < rowStart + this.width; ix++) {
                this.squares.push(ix);
            }
        }
    }
}

const intersectRect = (r1, r2) =>
    !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);

const doesOverlap = (el, idx, arr) => {
    for (var ix = 0; ix < arr.length; ix++) {
        if (el.id !== arr[ix].id && intersectRect(el, arr[ix])) {
            el.overlaps.push(arr[ix]);
        }
    }
    return el;
}

const calcOverlaps = (acc, cur) => {
    cur.overlaps.forEach(el => {
        cur.squares.forEach(curel => {
            if(el.squares.includes(curel)) acc.push(curel);
        });
    });
    return acc;
}

const process = input => {
    let claims = input.split('\n');
    claims = claims.map(claim => new Claim(claim));
    claims = claims.map(doesOverlap);
    claims.map(claim => claim.calcSquares());
    const overlappedSquares = claims.reduce(calcOverlaps, []);
    return new Set(overlappedSquares);
};

const p = process(input);

//console.log(p);
console.log(p.length || p.size || 0);
console.log('end');