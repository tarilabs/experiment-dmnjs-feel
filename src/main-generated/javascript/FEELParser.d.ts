import * as antlr4 from 'antlr4';
import * as ASTNode from "./ASTNode";
import { FEELValue } from "./FEELValue";
import { Either, FEELEvent } from "./Commons";
import { ErrorListener } from 'antlr4/error/ErrorListener';
export declare function parse(expression: string, simpleSymbols?: string[], errorListener?: FEELParserErrorListener): ASTNode.ASTNode;
export declare function evaluate(cu: ASTNode.ASTNode): Either<Error, FEELValue>;
export declare function isVariableNameValid(source: string): boolean;
export declare function checkVariableName(source: string): Array<any>;
export declare class FEELParserErrorListener implements ErrorListener {
    readonly msg: FEELEvent[];
    constructor(unused: null);
    hasErrors(): boolean;
    getErrors(): FEELEvent[];
    syntaxError(recognizer: antlr4.Recognizer, offendingSymbol: antlr4.Token, line: number, column: number, msg: string, e: any): void;
    reportAmbiguity(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void;
    reportAttemptingFullContext(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
    reportContextSensitivity(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
}
