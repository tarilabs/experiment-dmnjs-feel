import * as feelvalue from './FEELValue';
import {Either} from './Commons';

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

export class NullNode implements ASTNode {
    readonly value: feelvalue.NullValue = feelvalue.NullValue.value;

    accept<T>(visitor: ASTNodeVisitor<T>) {
        return visitor.visitNull(this);
    }
}

export class NumberNode implements ASTNode {
    readonly value: Either<Error, feelvalue.NumberValue>;

    constructor(text : string) {
        this.value = feelvalue.NumberValue.from(text);
    }

    accept<T>(visitor: ASTNodeVisitor<T>) {
        return visitor.visitNumber(this);
    }
}

export class StringNode implements ASTNode {
    readonly value: feelvalue.StringValue;

    constructor(text : string) {
        this.value = feelvalue.StringValue.from(text.slice(1, -1));
    }

    accept<T>(visitor: ASTNodeVisitor<T>) {
        return visitor.visitString(this);
    }
}

export class SumNode implements ASTNode {
    readonly left: ASTNode;
    readonly right: ASTNode;

    constructor(left : ASTNode, right : ASTNode) {
        this.left = left;
        this.right = right;
    }

    accept<T>(visitor: ASTNodeVisitor<T>) : T  {
        return visitor.visitSum(this);
    }
}

export enum IntervalBoundary {
    OPEN, CLOSED
}

export class RangeNode implements ASTNode {
    readonly lowerBound : IntervalBoundary;
    readonly upperBound : IntervalBoundary;
    readonly start : ASTNode;
    readonly end : ASTNode;

    public constructor(lowerBound : IntervalBoundary, start : ASTNode, end : ASTNode, upperBound : IntervalBoundary) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.start = start;
        this.end = end;
    }

    accept<T>(visitor: ASTNodeVisitor<T>) : T  {
        return visitor.visitRange(this);
    }
}

export enum UnaryOperator {
    LTE = "<=" ,
    LT= "<" ,
    GT= ">" ,
    GTE= ">=" ,
    NE= "!=" ,
    EQ= "=" ,
    NOT= "not" ,
    IN= "in" ,
    TEST= "test"
}

export class ValueVisitor implements ASTNodeVisitor<Either<Error, feelvalue.FEELValue>> {
    visitNull(node: NullNode): Either<Error, feelvalue.FEELValue> {
        throw new Error("Method not implemented.");
    }
    visitNumber(node: NumberNode): Either<Error, feelvalue.FEELValue> {
        return node.value;
    }
    visitString(node: StringNode): Either<Error, feelvalue.FEELValue> {
        return Either.ofRight(node.value);
    }
    visitSum(node: SumNode): Either<Error, feelvalue.FEELValue> {
        let lm = node.left.accept(this);
        let rm = node.right.accept(this);
        if (lm.isLeft() || rm.isLeft()) {
            return Either.ofLeft(new Error());
        }
        let left = lm.getRight();
        let right = rm.getRight();
        if (left instanceof feelvalue.NumberValue && right instanceof feelvalue.NumberValue)  {
            return Either.ofRight(left.sum(right));
        } else if (left instanceof feelvalue.StringValue && right instanceof feelvalue.StringValue)  {
            return Either.ofRight(left.sum(right));
        } else {
            return Either.ofLeft(new Error("TODO"));
        }
    }
    visitRange(node: RangeNode): Either<Error, feelvalue.FEELValue> {
        throw new Error("Method not implemented.");
    }
}