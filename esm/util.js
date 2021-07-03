/// <reference path="../module.d.ts" />
import _get from 'get-value';
// @ts-ignore
import escapeSplit from 'escape-split';
const SymStar = Symbol('*');
const splitSpecific = escapeSplit({ delimiter: '.', escaper: '\\' });
export function r(fn, target, paths, extra, result) {
    paths = p(paths);
    return r0(fn, target, paths, extra, result);
}
export function r0(fn, target, paths, extra, result) {
    let symIndex = paths.indexOf(SymStar);
    if (symIndex < 0) {
        // @ts-ignore
        let value = fn(target, paths, extra);
        if (typeof result != 'undefined') {
            result.push(value);
        }
        return value;
    }
    result = result || [];
    if (symIndex === 0) {
        let keys = ObjectKeysExtra(target, {
            //nonEnumerable: true,
            symbol: true,
        });
        paths.shift();
        for (let k of keys) {
            r0(fn, target, [k, ...paths], extra, result);
        }
        return result;
    }
    else {
        let p1 = paths.slice(0, symIndex);
        let o = _get(target, p1);
        let p2 = paths.slice(symIndex);
        return r0(fn, o, p2, extra, result);
    }
}
export function ObjectKeysExtra(obj, options = {}) {
    let keys = options.nonEnumerable ?
        Object.getOwnPropertyNames(obj)
        : Object.keys(obj);
    if (options.symbol) {
        keys.push(...Object.getOwnPropertySymbols(obj));
    }
    return keys;
}
/**
 * handle input to paths
 *
 * @param {string | ITSKeys[]} paths
 * @returns {ITSKeys[]}
 */
export function p(paths) {
    return p1(p0(paths));
}
export function p0(paths) {
    if (Array.isArray(paths))
        return paths.slice();
    if (typeof paths === 'symbol')
        return [paths];
    return splitSpecific(paths);
}
export function p1(paths) {
    return paths
        .map(v => {
        if (v === '*') {
            return SymStar;
        }
        else if (v === '\\*') {
            v = '*';
        }
        return v;
    });
}
/**
 * check all value is true
 *
 * @param {boolean | boolean[]} result
 * @returns {boolean}
 */
export function b(result) {
    return Array.isArray(result)
        ? result.every(boolean => !!boolean)
        : result;
}
export function b_some(result) {
    return Array.isArray(result)
        ? result.some(boolean => !!boolean)
        : result;
}
//# sourceMappingURL=util.js.map