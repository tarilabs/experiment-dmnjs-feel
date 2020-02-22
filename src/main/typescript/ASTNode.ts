import * as FEELValue from './FEELValue';

interface ASTNode { 
    accept<T>(visitor: ASTNodeVisitor<T>): T;
}

interface ASTNodeVisitor<T> {
    visitNumber(node: NumberNode): T;
    visitSum(node: SumNode): T;
}

export class NumberNode implements ASTNode {
    readonly value: FEELValue.NumberValue;

    constructor(text : string) {
        this.value = FEELValue.NumberValue.from(text);
    }

    accept<T>(visitor: ASTNodeVisitor<T>) {
        return visitor.visitNumber(this);
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

export class ValueVisitor implements ASTNodeVisitor<FEELValue.FEELValue> {
    visitNumber(node: NumberNode): FEELValue.NumberValue {
        return node.value;
    }
    visitSum(node: SumNode): FEELValue.FEELValue {
        let left = node.left.accept(this);
        let right = node.right.accept(this);
        if (left instanceof FEELValue.NumberValue && right instanceof FEELValue.NumberValue)  {
            return left.sum(right);
        } else {
            return FEELValue.NullValue.value; //TODO
        }
    }
}