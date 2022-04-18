import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema } from '../types';
export declare const toAminoDuration: (prop: string, scope: string[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoCaseToCamel: (prop: string, scope: string[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoInterface: (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number, aminoCasingFn: Function) => any;
export declare const toAminoInterfaceArray: (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number, aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoLongToString: (prop: string, scope: string[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoCoin: (prop: string, scope: string[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoHeight: (prop: string, scope: string[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const toAminoParseField: (field: Field, enums: Enum[], interfaces: Interface[], scope: any[], nested: number, aminoCasingFn: Function) => any;
export declare const toAmino: (schema: MessageSchema, enums: Enum[], interfaces: Interface[], aminoCasingFn: Function) => t.ArrowFunctionExpression;