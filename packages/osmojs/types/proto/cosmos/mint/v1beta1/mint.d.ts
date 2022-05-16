import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** maximum annual change in inflation rate */
    inflationRateChange: string;
    /** maximum inflation rate */
    inflationMax: string;
    /** minimum inflation rate */
    inflationMin: string;
    /** goal of percent bonded atoms */
    goalBonded: string;
    /** expected blocks per year */
    blocksPerYear: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial<I extends {
        inflation?: string;
        annualProvisions?: string;
    } & {
        inflation?: string;
        annualProvisions?: string;
    } & Record<Exclude<keyof I, keyof Minter>, never>>(object: I): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mintDenom?: string;
        inflationRateChange?: string;
        inflationMax?: string;
        inflationMin?: string;
        goalBonded?: string;
        blocksPerYear?: any;
    } & {
        mintDenom?: string;
        inflationRateChange?: string;
        inflationMax?: string;
        inflationMin?: string;
        goalBonded?: string;
        blocksPerYear?: any;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};