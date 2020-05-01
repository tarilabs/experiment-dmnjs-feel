import {describe, before, it} from 'mocha';
import * as assert from 'assert';
import * as x from '../../main-generated/javascript/FEELParser';
import { FEELValue, NumberValue } from '../../main-generated/javascript/FEELValue';

describe("Variable name valid", function() {
    const validVariableNames = ["valid variable name",
                                "?_873./-'+*valid",
                                "🐎"];
    for (const n of validVariableNames) {
        it(n, function(){
            assert.equal(x.isVariableNameValid(n), true);
        });    
    }
});
describe("Variable name NOT valid", function() {
    const validVariableNames = ["banana%mango",
    "?_873./-'%+*valid",
    "?_873./-'@+*valid",
    "5variable can't start with a number",
    "for keyword is an invalid start for a variable name"];
    for (const n of validVariableNames) {
        it(n, function(){
            assert.equal(x.isVariableNameValid(n), false);
        });    
    }
});