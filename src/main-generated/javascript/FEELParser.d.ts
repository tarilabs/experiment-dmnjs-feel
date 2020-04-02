import * as ASTNode from "./ASTNode";
import { FEELValue } from "./FEELValue";
import { Either } from "./Commons";
export declare function parse(expression: string): ASTNode.ASTNode;
export declare function evaluate(cu: ASTNode.ASTNode): Either<Error, FEELValue>;
