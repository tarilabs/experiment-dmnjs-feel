import { TokenTree } from "./Commons";
export declare class VariableSymbol {
    readonly id: string;
    readonly type: undefined;
    constructor(id: string, type: undefined);
}
export declare class Scope {
    readonly name: string;
    readonly parentScope?: Scope;
    symbols: Map<string, VariableSymbol>;
    childScopes: Map<string, Scope>;
    tokenTree: TokenTree | null;
    constructor(name: string, parentScope?: Scope);
    define(symbol: VariableSymbol): boolean;
    resolve(id: string): VariableSymbol | undefined;
}
