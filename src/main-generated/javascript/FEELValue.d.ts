import * as Decimal from 'decimal.js';
import { Either } from './Commons';
export interface FEELValue {
    toJSONObject(): Object;
}
declare const NullValueUUID: unique symbol;
export declare class NullValue implements FEELValue {
    [NullValueUUID]: void;
    static readonly value: NullValue;
    private constructor();
    toJSONObject(): any;
}
export declare class NumberValue implements FEELValue {
    readonly value: Decimal.Decimal;
    private constructor();
    static from(value: string): Either<Error, NumberValue>;
    sum(value: NumberValue): NumberValue;
    toJSONObject(): Object;
}
export {};
