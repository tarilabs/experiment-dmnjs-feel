import * as feelvalue from './FEELValue';
import { Either } from './Commons';
export interface ASTNode {
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
interface ASTNodeVisitor<T> {
    visitNull(node: NullNode): T;
    visitNumber(node: NumberNode): T;
    visitString(node: StringNode): T;
    visitSum(node: SumNode): T;
    visitRange(node: RangeNode): T;
}
export declare class NullNode implements ASTNode {
    readonly value: feelvalue.NullValue;
    accept<T>(visitor: ASTNodeVisitor<T>): T;
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
export declare enum IntervalBoundary {
    OPEN = 0,
    CLOSED = 1
}
export declare class RangeNode implements ASTNode {
    readonly lowerBound: IntervalBoundary;
    readonly upperBound: IntervalBoundary;
    readonly start: ASTNode;
    readonly end: ASTNode;
    constructor(lowerBound: IntervalBoundary, start: ASTNode, end: ASTNode, upperBound: IntervalBoundary);
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}
export declare enum UnaryOperator {
    LTE = "<=",
    LT = "<",
    GT = ">",
    GTE = ">=",
    NE = "!=",
    EQ = "=",
    NOT = "not",
    IN = "in",
    TEST = "test"
}
export declare class ValueVisitor implements ASTNodeVisitor<Either<Error, feelvalue.FEELValue>> {
    visitNull(node: NullNode): Either<Error, feelvalue.FEELValue>;
    visitNumber(node: NumberNode): Either<Error, feelvalue.FEELValue>;
    visitString(node: StringNode): Either<Error, feelvalue.FEELValue>;
    visitSum(node: SumNode): Either<Error, feelvalue.FEELValue>;
    visitRange(node: RangeNode): Either<Error, feelvalue.FEELValue>;
}
export {};
