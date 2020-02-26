import * as feelvalue from './FEELValue';
import { Either } from './Commons';
export interface ASTNode {
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
interface ASTNodeVisitor<T> {
    visitNumber(node: NumberNode): T;
    visitString(node: StringNode): T;
    visitSum(node: SumNode): T;
}
export declare class NumberNode implements ASTNode {
    readonly value: Either<Error, feelvalue.NumberValue>;
    constructor(text: string);
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
export declare class StringNode implements ASTNode {
    readonly value: feelvalue.StringValue;
    constructor(text: string);
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
export declare class SumNode implements ASTNode {
    readonly left: ASTNode;
    readonly right: ASTNode;
    constructor(left: ASTNode, right: ASTNode);
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
export declare class ValueVisitor implements ASTNodeVisitor<Either<Error, feelvalue.FEELValue>> {
    visitNumber(node: NumberNode): Either<Error, feelvalue.FEELValue>;
    visitString(node: StringNode): Either<Error, feelvalue.FEELValue>;
    visitSum(node: SumNode): Either<Error, feelvalue.FEELValue>;
}
export {};
