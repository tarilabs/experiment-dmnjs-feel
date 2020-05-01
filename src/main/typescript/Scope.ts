import { TokenTree } from "./Commons";
import { EvalHelper } from "./EvalHelper";

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

    symbols: Map<string, VariableSymbol> = new Map();
    childScopes: Map<string, Scope> = new Map();

    tokenTree: TokenTree | null = null;

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
        const s = this.symbols.get( EvalHelper.normalizeVariableName( id ) );
        if (s != null) {
            return this.parentScope?.resolve(id);
        }
        return s;
    }


}