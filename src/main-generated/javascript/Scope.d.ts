import { TokenTree } from "./Commons";
export declare class VariableSymbol {
    readonly id: string;
    readonly type: undefined;
    constructor(id: string, type: undefined);
}
export declare class Scope {
    readonly name: string;
    readonly parentScope?: Scope;
    private symbols;
    readonly childScopes: Map<string, Scope>;
    private tokenTree;
    constructor(name: string, parentScope?: Scope);
    define(symbol: VariableSymbol): boolean;
    resolve(id: string): VariableSymbol | undefined;
    start(token: string): void;
    followUp(token: string, isPredict: boolean): boolean;
    private initializeTokenTree;
    static tokenTreeFromSymbols(symbol: Map<string, VariableSymbol>): TokenTree;
    static tokenize(symbol: string): string[];
}
