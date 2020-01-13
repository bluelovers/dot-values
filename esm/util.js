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
    let symIndex = paths.indexOf(SymStar), hasResult = result != null, isLast = !paths.length;
    if (symIndex < 0) {
        let value = isLast
            ? target
            // @ts-ignore
            : fn(target, paths, extra);
        if (hasResult) {
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
        keys
            .forEach(k => {
            r0(fn, target, [k].concat(paths), extra, result);
        });
        return result;
    }
    else {
        let p1 = paths.slice(0, symIndex);
        let p2 = paths.slice(symIndex);
        return r0(fn, _get(target, p1), p2, extra, result);
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