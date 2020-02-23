export class Either<L, R> {
    private readonly value: L | R;
    private readonly left: boolean;

    private constructor(value: L | R, left: boolean) { 
        this.value = value;
        this.left = left;
    }

    isLeft(): boolean {
        return this.left;
    }

    getLeft(): L {
        if (!this.isLeft()) throw new Error("This either is not a left");
        return <L>this.value;
    }

    isRight(): boolean {
        return !this.left;
    }
    getRight(): R {
        if (!this.isRight()) throw new Error("This either is not a right");
        return <R>this.value;
    }

    static ofLeft<L, R>(value: L) {
        return new Either<L, R>(value, true);
    }

    static ofRight<L, R>(value: R) {
        return new Either<L, R>(value, false);
    }
}