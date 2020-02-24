import { ASTNode } from "./ASTNode";
import { FEELValue } from "./FEELValue";
import { Either } from "./Commons";
export declare function parse(expression: string): ASTNode;
export declare function evaluate(cu: ASTNode): Either<Error, FEELValue>;
