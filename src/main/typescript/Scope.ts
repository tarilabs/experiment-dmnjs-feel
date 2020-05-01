import { TokenTree } from "./Commons";
import { EvalHelper } from "./EvalHelper";
import { InputStream, Lexer, Token } from "antlr4";


var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;

export class VariableSymbol {
    readonly id: string;
    readonly type: undefined;

    public constructor(id: string, type: undefined) {
        this.id = id;
        this.type = type;
    }
}

export class Scope {
    readonly name: string;
    readonly parentScope?: Scope;

    private symbols: Map<string, VariableSymbol> = new Map();
    readonly childScopes: Map<string, Scope> = new Map();

    private tokenTree: TokenTree | null = null;

    public constructor(name: string, parentScope?: Scope) {
        this.name = name;
        this.parentScope = parentScope;
    }

    public define( symbol: VariableSymbol): boolean {
        if ( this.symbols.has( symbol.id ) ) {
            // duplicate symbol definition
            return false;
        }
        this.symbols.set( EvalHelper.normalizeVariableName( symbol.id ), symbol );
        if( this.tokenTree != null ) {
            // also load the symbol into the token tree
            throw new Error("TODO");
        }
        return true;
    }

    public resolve(id: string): VariableSymbol | undefined {
        console.log("resolve( "+id);
        this.symbols.forEach((v, k, m) => {console.log(k+ " = "+ v)});
        const s = this.symbols.get( EvalHelper.normalizeVariableName( id ) );
        console.log("s: "+s);
        if (s == null) {
            return this.parentScope?.resolve(id);
        }
        return s;
    }

    public start( token: string ) {
        if( this.tokenTree == null ) {
            this.initializeTokenTree();
        }
        this.tokenTree!.start( token );
        this.parentScope?.start(token);
    }

    public followUp( token: string, isPredict: boolean ): boolean {
        // must call followup on parent scope
        const parent = this.parentScope != null && this.parentScope.followUp(token, isPredict);
        return this.tokenTree!.followUp( token, !isPredict ) || parent;
    }

    private initializeTokenTree() {
        this.tokenTree = Scope.tokenTreeFromSymbols(this.symbols);
    }
    
    public static tokenTreeFromSymbols(symbol: Map<string, VariableSymbol>): TokenTree {
        console.log("tokenTreeFromSymbols( )");
        symbol.forEach((v, k, m) => {console.log(k+ " = "+ v)});
        const tt : TokenTree = new TokenTree();
        for (const s of Array.from(symbol.keys()) ) {
            const tokens = Scope.tokenize( s );
            console.log(tokens);
            tt.addName(tokens);
        }
        return tt;
    }
    static tokenize(symbol: string) {
        let input = new InputStream(symbol, true);
        let lexer: Lexer = new MyGrammarLexer(input);
        let tokens: string[] = ([]);

        for (let token = lexer.nextToken();
                 token.type != Token.EOF;
                 token = lexer.nextToken()) {
            tokens.push( token.text );
        }
        return tokens;
    }
}