"use strict";
var _a;
exports.__esModule = true;
var FEELParser_1 = require("./FEELParser");
(_a = document.getElementById("area2")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function showCurrentValue(event) {
    var _a;
    var element = (_a = event) === null || _a === void 0 ? void 0 : _a.target;
    var value = element.value;
    var area1 = document.getElementById("area1");
    var area1text = area1.value;
    var values = area1text.split(/\r?\n/);
    var listener = new FEELParser_1.FEELParserErrorListener(null);
    FEELParser_1.parse(value, values, listener);
    var area3 = document.getElementById("area3");
    var feedback = listener.msg.map(function (x) { return x.getMessage(); }).toString();
    console.log(feedback);
    area3.value = feedback;
});
//# sourceMappingURL=index.js.map