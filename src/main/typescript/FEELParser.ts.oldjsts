import * as y from "../../../src/main/javascript/FEELParserJS";
import { ASTNode } from "./ASTNode";
import { FEELValue } from "./FEELValue";
import { Either } from "./Commons";

// the reason these function do wraps, is to avoid re-export a JS-based file which would in turn touch in several dirs when invoking tsc from tests.
export function parse(expression : string) : ASTNode {
    return y.parse(expression);
}
export function evaluate(cu : ASTNode) : Either<Error, FEELValue> {
    return y.evaluate(cu);
}