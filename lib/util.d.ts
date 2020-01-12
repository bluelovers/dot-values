import _get from 'get-value';
import _set from 'set-value';
import _has from 'has-value';
import _unset from 'unset-value';
/**
 * @param  {String} fn
 * @param  {Object} target
 * @param  {Array.<String>} path
 * @param  {*} extra
 * @param  {Array} result (optional)
 * @return {*}
 */
export declare function r<T, F extends typeof _get | typeof _set | typeof _has | typeof _unset>(fn: F, target: unknown | unknown[], path: string[], extra?: Parameters<F>[2], result?: T[]): T | T[];
/**
 * @param {String|Array} path
 * @return {Array.<String>}
 */
export declare function p(path: string | string[]): string[];
/**
 * @param {Array|Boolean} result
 * @return {Boolean}
 */
export declare function b(result: boolean | boolean[]): boolean;
