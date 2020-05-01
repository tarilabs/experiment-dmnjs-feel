import * as x from '../../../src/main-generated/javascript/FEELParser';

console.log("ONLY PARSE test");
let parsed;

parsed = x.parse("<=47");
console.log(parsed);

parsed = x.parse("[1..2)");
console.log(parsed);

parsed = x.parse("my customer");
console.log(parsed);

parsed = x.parse("my customer", ["my customer"]);
console.log(parsed);

// parsed = x.parse('{a : "x"}.a');
// console.log(parsed);