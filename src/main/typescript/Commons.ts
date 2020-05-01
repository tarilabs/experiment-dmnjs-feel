declare const EitherUUID: unique symbol;

export class Either<L, R> {
    [EitherUUID]: void;
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

class Node {
    readonly token : string | null;
    readonly parent : Node | null;
    readonly children : Array<Node>;

    public constructor(token : string | null, parent : Node | null)  {
        this.token = token;
        this.parent = parent;
        this.children = new Array();
    }
}

export class TokenTree {
    /*private*/ root : Node;
    /*private*/ currentNode : Node | null;

    public constructor() {
        this.root = new Node(null, null);
        this.currentNode = null;
    }

    public addName(tokens : Array<string>) {
        let current : Node = this.root;
        for (const t of tokens) {
            let next : Node | null = this.findToken(current, t);
            if(next == null) {
                next = new Node(t, current);
                current.children.push(next);
            }
            current = next;
        }
    }

    public start(t : string) {
        this.currentNode = this.findToken(this.root, t);
    }

    public followUp(t : string, commit : boolean) : boolean {
        if(this.currentNode == null) {
            return false;
        }
        let node : Node | null = this.findToken(this.currentNode, t);
        if(commit) {
            this.currentNode = node;
        }
        return node != null;
    }

    findToken(current : Node, t : string) : Node | null {
        for (const n of current.children) {
            if( n.token === t ) {
                return n;
            }
        }
        return null;
    }
}