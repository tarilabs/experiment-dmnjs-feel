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
        console.log("start(" + t);
        console.log(this);
        this.currentNode = this.findToken(this.root, t);
        console.log(this);
        console.log("-");
    }

    public followUp(t : string, commit : boolean) : boolean {
        console.log("followUp(" + t, ", "+commit);
        console.log(this);
        if(this.currentNode == null) {
            return false;
        }
        let node : Node | null = this.findToken(this.currentNode, t);
        if(commit) {
            this.currentNode = node;
        }
        console.log(node!= null);
        console.log("-");
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

export enum Severity {
    TRACE, INFO, WARN, ERROR
}

export interface FEELEvent {
    /**
     * Returns the severity of the event
     * 
     * @return
     * @return {FEELEvent.Severity}
     */
    getSeverity() : Severity;

    /**
     * Returns a human readable message about the event
     * 
     * @return
     * @return {string}
     */
    getMessage() : string;

    /**
     * In case the event relates to an exception, returns
     * the caught Throwable
     * 
     * @return
     * @return {Error}
     */
    getSourceException() : Error;

    /**
     * In case the event refers to the source code, returns
     * the line in the source code where the event was generated
     * or -1 if it does not refer to a source code line.
     * 
     * The line is 1-based. I.e., the first line is 1,
     * second line is 2, etc.
     * 
     * @return
     * @return {number}
     */
    getLine() : number;

    /**
     * In case the event refers to the source code, returns
     * the character in the line of the the source code where
     * the event was generated or -1 if it does not refer to a
     * source code character.
     * 
     * The column is 0-based. I.e. the first character in the
     * line is 0, the second is 1, and so on.
     * 
     * @return
     * @return {number}
     */
    getColumn() : number;

    /**
     * In case the event refers to a symbol in the source code,
     * this method returns the offending symbol, as an ANTLR
     * CommonToken instance. Otherwise, it returns null.
     * 
     * @return
     * @return {*}
     */
    getOffendingSymbol() : any;
}

export class FEELEventBase implements FEELEvent {
    /*private*/ severity : Severity;

    /*private*/ message : string;

    /*private*/ sourceException : Error;

    public constructor(severity : Severity, message : string, sourceException : Error) {
        this.severity = severity;
        this.message = message;
        this.sourceException = sourceException;
    }

    /**
     * 
     * @return {FEELEvent.Severity}
     */
    public getSeverity() : Severity {
        return this.severity;
    }

    /**
     * 
     * @return {string}
     */
    public getMessage() : string {
        return this.message;
    }

    /**
     * 
     * @return {Error}
     */
    public getSourceException() : Error {
        return this.sourceException;
    }

    /**
     * 
     * @return {number}
     */
    public getLine() : number {
        return -1;
    }

    /**
     * 
     * @return {number}
     */
    public getColumn() : number {
        return -1;
    }

    /**
     * 
     * @return {*}
     */
    public getOffendingSymbol() : any {
        return null;
    }
}

export class SyntaxErrorEvent extends FEELEventBase implements FEELEvent {
    /*private*/ line : number;

    /*private*/ column : number;

    /*private*/ offendingSymbol : any;

    public constructor(severity : Severity, msg : string, e : Error, line : number, charPositionInLine : number, offendingSymbol : any) {
        super(severity, msg, e);
        this.line = 0;
        this.column = 0;
        this.offendingSymbol = null;
        this.line = line;
        this.column = charPositionInLine;
        this.offendingSymbol = offendingSymbol;
    }

    public getLine() : number {
        return this.line;
    }

    public getColumn() : number {
        return this.column;
    }

    public getOffendingSymbol() : any {
        return this.offendingSymbol;
    }
}