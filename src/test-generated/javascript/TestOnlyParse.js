"use strict";
exports.__esModule = true;
var x = require("../../../src/main-generated/javascript/FEELParser");
console.log("ONLY PARSE test");
var parsed;
parsed = x.parse("<=47");
console.log(parsed);
parsed = x.parse("[1..2)");
console.log(parsed);
parsed = x.parse("my customer");
console.log(parsed);
parsed = x.parse("my customer", ["my customer"]);
console.log(parsed);
//# sourceMappingURL=TestOnlyParse.js.map