/// <reference path="../module.d.ts" />
import _get from 'get-value';
import _set from 'set-value';
import _has from 'has-value';
import _unset from 'unset-value';
import { ITSKeys } from 'ts-type/lib/type/base';
import { IPathsInput } from './types';
export type IInputPaths = string | ITSKeys[];
export declare function r<T, F extends typeof _get | typeof _set | typeof _has | typeof _unset>(fn: F, target: unknown | unknown[], paths: string | ITSKeys[], extra?: Parameters<F>[2], result?: T[]): T | T[];
export declare function r0<T, F extends typeof _get | typeof _set | typeof _has | typeof _unset>(fn: F, target: unknown | unknown[], paths: ITSKeys[], extra?: Parameters<F>[2], result?: T[]): T | T[];
export declare function ObjectKeysExtra(obj: object, options?: {
    /**
     * include non-enumerable keys
     */
    nonEnumerable?: boolean;
    /**
     * include symbol
     */
    symbol?: boolean;
}): ITSKeys[];
/**
 * handle input to paths
 *
 * @param {string | ITSKeys[]} paths
 * @returns {ITSKeys[]}
 */
export declare function p(paths: IPathsInput): ITSKeys[];
export declare function p0(paths: IPathsInput): ITSKeys[];
export declare function p1(paths: ITSKeys[]): ITSKeys[];
/**
 * check all value is true
 *
 * @param {boolean | boolean[]} result
 * @returns {boolean}
 */
export declare function b(result: boolean | boolean[]): boolean;
export declare function b_some(result: boolean | boolean[]): boolean;
