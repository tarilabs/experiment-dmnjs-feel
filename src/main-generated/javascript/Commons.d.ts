declare const EitherUUID: unique symbol;
export declare class Either<L, R> {
    [EitherUUID]: void;
    private readonly value;
    private readonly left;
    private constructor();
    isLeft(): boolean;
    getLeft(): L;
    isRight(): boolean;
    getRight(): R;
    static ofLeft<L, R>(value: L): Either<L, R>;
    static ofRight<L, R>(value: R): Either<L, R>;
}
declare class Node {
    readonly token: string | null;
    readonly parent: Node | null;
    readonly children: Array<Node>;
    constructor(token: string | null, parent: Node | null);
}
export declare class TokenTree {
    root: Node;
    currentNode: Node | null;
    constructor();
    addName(tokens: Array<string>): void;
    start(t: string): void;
    followUp(t: string, commit: boolean): boolean;
    findToken(current: Node, t: string): Node | null;
}
export {};
