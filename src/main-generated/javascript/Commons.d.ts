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
export {};
