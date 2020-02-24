import { ASTNode }  from "../typescript/ASTNode";
import { FEELValue } from "../typescript/FEELValue";
import { Either } from "../typescript/Commons";

export function parse(expression : string): ASTNode;
export function evaluate(cu : ASTNode) : Either<Error, FEELValue>; 