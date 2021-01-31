//Add new functions, variables here

function main(input) {
    let inp = input.split(' ');
    let num = inp[0];
    let a = inp[1];
    let b = inp[2];
    if (a == 10 && b == 2) {
        decToBi(num);
    }
    if (a == 2 && b == 10) {
        biTODec(num);
    }
}

function decToBi(num) {
    let bin = 0;
    let rem, i = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(bin);
}

function biTODec(num) {
    let decimal = +0;
    let bits = +1;
    for (let i = 0; i < num.length; i++) {
        let currNum = +(num[num.length - i - 1]);
        if (currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    console.log(decimal);
}

module.exports = main;