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
export declare enum Severity {
    TRACE = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}
export interface FEELEvent {
    getSeverity(): Severity;
    getMessage(): string;
    getSourceException(): Error;
    getLine(): number;
    getColumn(): number;
    getOffendingSymbol(): any;
}
export declare class FEELEventBase implements FEELEvent {
    severity: Severity;
    message: string;
    sourceException: Error;
    constructor(severity: Severity, message: string, sourceException: Error);
    getSeverity(): Severity;
    getMessage(): string;
    getSourceException(): Error;
    getLine(): number;
    getColumn(): number;
    getOffendingSymbol(): any;
}
export declare class SyntaxErrorEvent extends FEELEventBase implements FEELEvent {
    line: number;
    column: number;
    offendingSymbol: any;
    constructor(severity: Severity, msg: string, e: Error, line: number, charPositionInLine: number, offendingSymbol: any);
    getLine(): number;
    getColumn(): number;
    getOffendingSymbol(): any;
}
export {};
