"use strict";
exports.__esModule = true;
var yaml = require("js-yaml");
var fs = require("fs");
var mocha_1 = require("mocha");
var assert = require("assert");
var x = require("../../../src/main-generated/javascript/FEELParser");
try {
    var filename_1 = 'src/test/resources/example.yml';
    mocha_1.describe('Using: ' + filename_1, function () {
        var doc = yaml.safeLoadAll(fs.readFileSync(filename_1, 'utf8'));
        var _loop_1 = function (ydoc) {
            if (ydoc && ydoc.expression && typeof ydoc.expression == 'string' && ydoc.result) {
                var casted_1 = ydoc;
                mocha_1.it("" + casted_1.expression + "  = " + casted_1.result, function () {
                    var parsed = x.parse(casted_1.expression);
                    var result = x.evaluate(parsed);
                    if (result.isLeft()) {
                        assert.fail("Failed evaluating as: " + result.getLeft());
                    }
                    assert.equal(result.getRight().toJSONObject(), ydoc.result);
                });
            }
            else {
                mocha_1.it("Using: " + JSON.stringify(ydoc), function () {
                    assert.fail("Missing in YAML either expression/result: " + JSON.stringify(ydoc));
                });
            }
        };
        for (var _i = 0, doc_1 = doc; _i < doc_1.length; _i++) {
            var ydoc = doc_1[_i];
            _loop_1(ydoc);
        }
    });
}
catch (e) {
    console.log(e);
}
function asd(asd) {
}
//# sourceMappingURL=TestIteratingYaml.js.map