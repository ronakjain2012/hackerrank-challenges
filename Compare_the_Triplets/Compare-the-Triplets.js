
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var n = Math.max(a.length,b.length);
    var res = [0,0];
    for(var i=0;i<n;i++) {
        if ((a[i] != undefined && b[i] != undefined) && a[i]>b[i]) {
            res[0]++; 
        } else if ((a[i] != undefined && b[i] != undefined) && a[i]<b[i]) {
            res[1]++; 
        }

        if((a[i] == undefined || b[i] == undefined)){
            if(a.length>b.length){
                res[0]++; 
            } else {
                res[1]++; 
            }
        }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream('./output/output');

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);
    
    ws.write(result.join(' ') + '\n');
    process.stdout.write(result.join(' '));

    ws.end();
}
