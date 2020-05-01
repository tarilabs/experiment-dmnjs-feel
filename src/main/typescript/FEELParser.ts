import * as antlr4 from 'antlr4';

var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor.js').FEEL_1_1Visitor;

import * as ASTNode from "./ASTNode";
import { FEELValue, NullValue } from "./FEELValue";
import { Either } from "./Commons";
import { ErrorListener } from 'antlr4/error/ErrorListener';

class MockedParserHelper {

    private dynamicResolution : number = 0;

    public isDynamicResolution() : boolean {
        return this.dynamicResolution > 0;
    }

    public disableDynamicResolution() : void {
        if(this.dynamicResolution > 0) {
            this.dynamicResolution--;
        }
    }

    public enableDynamicResolution() : void {
        this.dynamicResolution++;
    }

    public pushTypeScope() : void {
        console.log('pushTypeScope()');
    }

    public pushScope() : void {
        console.log('pushScope()');
    }

    public popScope() : void {
        console.log('popScope()');
    }

    public pushName(ctx : antlr4.ParserRuleContext) : void {
        console.log('pushName(' +this.getOriginalText(ctx));
    }

    public popName() : void {
        console.log('popName()');
    }

    public recoverScope() : void {
        console.log('recoverScope()');
    }

    public dismissScope() : void {
        console.log('dismissScope()');
    }

    public defineVariable(ctx : antlr4.ParserRuleContext) : void {
        console.log('defineVariable( ' + this.getOriginalText(ctx));
    }

    public isFeatDMN12EnhancedForLoopEnabled() : boolean {
        return true;
    }

    public followUp(lt1 : antlr4.Token, localctx : any) : boolean {
        console.log('followUp( ' + lt1.text + ', '  +localctx + " ) : FALSE");
        return false;
    }

    public startVariable(startToken : antlr4.Token) : void {
        console.log("startVariable( "+startToken.text);
    }

    // TODO this could be made static, but check how to call from JS...
    public getOriginalText(  ctx : antlr4.ParserRuleContext ) : string {
        const a = ctx.start.start;
        const b = ctx.stop.stop;
        // const interval = new antlr4.Interval(a,b);
        const text = ctx.start.getInputStream().getText(a, b); // difference b/w Java and JS Antlr's API.
        return text;
    }

    public validateVariable(n1 : antlr4.ParserRuleContext, qn : Array<string>, name : string ) {
        console.log("validateVariable( "+this.getOriginalText(n1)+", "+qn+", "+name);
        const varName = qn.join(".");
        console.log("TODO ERROR Unknown variable "+varName);
    }
}

export function parse(expression : string) : ASTNode.ASTNode {
    var chars = new antlr4.InputStream(expression, true);
    var lexer = new MyGrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    const helper = new MockedParserHelper();
    parser.setHelper(helper);
    var tree = parser.compilation_unit();
    log(tree.toStringTree(parser.ruleNames));

    var cu = tree.accept(new MyVisitor());
    log(JSON.stringify(cu));
    return cu;
}
export function evaluate(cu : ASTNode.ASTNode) : Either<Error, FEELValue> {
    var feelValue = cu.accept(new ASTNode.ValueVisitor());
    return feelValue;
}

function log(text : any) {
    //console.log(text);
}

export function isVariableNameValid(source: string): boolean {
    return checkVariableName( source ).length == 0;
}

export function checkVariableName(source: string ): Array<any>  {
    if( source == null || source.length==0 ) {
        return ["INVALID_VARIABLE_NAME_EMPTY"];
    }
    let input = new antlr4.InputStream(source, true);
    let lexer = new MyGrammarLexer(input);
    let tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    const helper = new MockedParserHelper();
    parser.setHelper(helper);
    const aParser = <antlr4.Parser>parser;
    // TODO: antlr JS reporting for failed grammar predicate? aParser.setErrorHandler( new FEELErrorHandler() );
    const errorChecker: FEELParserErrorListener = new FEELParserErrorListener( null );
    aParser.removeErrorListeners(); // removes the error listener that prints to the console
    aParser.addErrorListener( errorChecker );
    const nameDef = parser.nameDefinitionWithEOF(); // be sure to align below parser.getRuleInvocationStack().contains("nameDefinition...

    if( ! errorChecker.hasErrors() &&
        nameDef != null &&
        source.trim() == ( parser.getHelper().getOriginalText( nameDef ) ) ) {
        return ([]);
    }
    return errorChecker.getErrors();
}
export class FEELParserErrorListener implements ErrorListener {
    readonly msg: any[] = ([]);
    public constructor(unused: null) {
        
    }
    hasErrors(): boolean {
        return this.msg.length > 0;
    }
    getErrors(): any[] {
        return this.msg;
    }
    syntaxError(recognizer: antlr4.Recognizer, offendingSymbol: antlr4.Token, line: number, column: number, msg: string, e: any): void {
        this.msg.push(msg);
    }
    reportAmbiguity(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void {
        // do nothing.
    }
    reportAttemptingFullContext(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void {
        // do nothing.
    }
    reportContextSensitivity(recognizer: antlr4.Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void {
        // do nothing.
    }
}


// IMPORTANT: please note this overwrite will be shared:
MyVisitor.prototype.visit = function(ctx : any) {
    if (Array.isArray(ctx)) {
       if (ctx.length > 1) {
           return ctx.map((child) => child.accept(this));
       } else if (ctx.length === 1) {
           return ctx[0].accept(this);
       } else {
           throw new Error("??");
       }
   } else {
       return ctx.accept(this);
   }
};
MyVisitor.prototype.visitCompilation_unit = function(ctx : any) {
   return this.visit(ctx.expression());
};
MyVisitor.prototype.visitAddExpression = function(ctx : any) {
   log("I found a visitAddExpression: "+ctx.getText());
   log("I found a visitAddExpression: "+ctx.op.text);
   let left = this.visit(ctx.additiveExpression());
   log("I found a visitAddExpression: "+left);
   let right = this.visit(ctx.multiplicativeExpression());
   log("I found a visitAddExpression: "+right);
   return new ASTNode.SumNode(left, right);
};
MyVisitor.prototype.visitPrimaryLiteral = function(ctx : any) {
   log("I found a primary: "+ctx.getText());
   return this.visitChildren(ctx);
};
MyVisitor.prototype.visitNumberLiteral = function(ctx : any) {
   return new ASTNode.NumberNode(ctx.getText());
};
MyVisitor.prototype.visitStringLiteral = function(ctx : any) {
   return new ASTNode.StringNode(ctx.getText());
};
MyVisitor.prototype.visitInterval = function(ctx : any) {
    const start = this.visit( ctx.start );
    const end = this.visit( ctx.end );
    const low = ctx.low.text=== "[" ? ASTNode.IntervalBoundary.CLOSED : ASTNode.IntervalBoundary.OPEN;
    const up = ctx.up.text === "]" ? ASTNode.IntervalBoundary.CLOSED : ASTNode.IntervalBoundary.OPEN;
    return new ASTNode.RangeNode( low, start, end, up );
}
MyVisitor.prototype.visitPositiveUnaryTestIneqInterval = function(ctx : any) {
    const value = this.visit(ctx.endpoint());
    const op : string = <string> ctx.op.text;
    switch (op) {
        case ASTNode.UnaryOperator.GT:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, value, new ASTNode.NullNode(), ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.GTE:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.CLOSED, value, new ASTNode.NullNode(), ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.LT:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, new ASTNode.NullNode(), value, ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.LTE:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, new ASTNode.NullNode(), value, ASTNode.IntervalBoundary.CLOSED);
        default:
            throw new Error("by the parser rule FEEL grammar rule 7.a for range syntax should not have determined the operator " + op);
    }
}