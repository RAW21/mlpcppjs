const iterate = require('./build/Release/native.node').iterate;
const learning_rate = 0.1;
const input = [1, 0, 1];
const output = [1];
const iterations = 1e3;
const initial_weight = 0.5;
console.log(iterate(learning_rate, input, output, iterations));