import * as feelvalue from './FEELValue';
import {Either} from './Commons';

export interface ASTNode { 
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}

interface ASTNodeVisitor<T> {
    visitNumber(node: NumberNode): T;
    visitString(node: StringNode): T;
    visitSum(node: SumNode): T;
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

export class ValueVisitor implements ASTNodeVisitor<Either<Error, feelvalue.FEELValue>> {
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
}