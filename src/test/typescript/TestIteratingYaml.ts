import yaml = require('js-yaml');
import fs   = require('fs');
import {describe, before, it} from 'mocha';
import * as assert from 'assert';
import * as x from '../../../src/main-generated/javascript/FEELParser';
import { FEELValue, NumberValue } from '../../main-generated/javascript/FEELValue';

interface YDoc {
    expression : string;
    result : any;
}

try {
  let filename : string = 'src/test/resources/example.yml';
  describe('Using: '+filename, function() {
      const doc = yaml.safeLoadAll(fs.readFileSync(filename, 'utf8'));
      for (const ydoc of doc) {
        if (ydoc && ydoc.expression && typeof ydoc.expression == 'string' && ydoc.result) {
            let casted = <YDoc>ydoc;
            it(""+casted.expression + "  = "+casted.result, function(){
                let parsed = x.parse(casted.expression);
                let result = x.evaluate(parsed);
                if (result.isLeft() ) {
                    assert.fail("Failed evaluating as: "+result.getLeft());
                }
                assert.equal(result.getRight().toJSONObject(), ydoc.result);
            });            
        } else {
            it("Using: "+JSON.stringify(ydoc), function(){
                assert.fail("Missing in YAML either expression/result: "+JSON.stringify(ydoc));
            });    
        }
      }
  });
} catch (e) {
  console.log(e);
}

function asd(asd : FEELValue) {

}