import * as Decimal from 'decimal.js';

declare const NullValueUUID: unique symbol;

export class NullValue {
    [NullValueUUID]: void;                            
    static readonly value: NullValue = new NullValue();    
    private constructor() { };                   
}

function greet(): NullValue {                         
    console.log("Hello world!");
    return NullValue.value;                           
}

export class NumberValue {
    readonly value: Decimal.Decimal;
    private constructor(value : string) {
        this.value = new Decimal.Decimal(value);
    }

    static from(value : string) : NumberValue | undefined {
        return new NumberValue(value);
    }
}