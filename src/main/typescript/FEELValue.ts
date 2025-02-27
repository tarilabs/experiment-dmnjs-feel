import * as Decimal from 'decimal.js';
import {Either} from './Commons';

export interface FEELValue {
    toJSONObject() : Object;
}

declare const NullValueUUID: unique symbol;

export class NullValue implements FEELValue {
    [NullValueUUID]: void;                            
    static readonly value: NullValue = new NullValue();    
    private constructor() { };                   
    toJSONObject(): any {
        return null;
    }
}

function greet(): NullValue {                         
    console.log("Hello world!");
    return NullValue.value;                           
}

export class NumberValue implements FEELValue {
    readonly value: Decimal.Decimal;
    private constructor(value : Decimal.Decimal) {
        this.value = value;
    }
    
    static from(value : string) : Either<Error, NumberValue> {
        let d = new Decimal.Decimal(value); // TODO will need to handle parse errors.
        return Either.ofRight(new NumberValue(d));
    }
    
    sum(value : NumberValue) : NumberValue {
        return new NumberValue(this.value.add(value.value));
    }

    toJSONObject(): Object {
        return this.value.toNumber();
    }
}

export class StringValue implements FEELValue {
    readonly value: string;
    private constructor(value : string) {
        this.value = value;
    }
    
    static from(value : string) : StringValue {
        return new StringValue(value);
    }
    
    sum(value : StringValue) : StringValue {
        return new StringValue(this.value + value.value);
    }

    toJSONObject(): Object {
        return this.value;
    }
}