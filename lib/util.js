"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b_some = exports.b = exports.p1 = exports.p0 = exports.p = exports.ObjectKeysExtra = exports.r0 = exports.r = void 0;
const tslib_1 = require("tslib");
/// <reference path="../module.d.ts" />
const get_value_1 = (0, tslib_1.__importDefault)(require("get-value"));
// @ts-ignore
const escape_split_1 = (0, tslib_1.__importDefault)(require("escape-split"));
const SymStar = Symbol('*');
const splitSpecific = (0, escape_split_1.default)({ delimiter: '.', escaper: '\\' });
function r(fn, target, paths, extra, result) {
    paths = p(paths);
    return r0(fn, target, paths, extra, result);
}
exports.r = r;
function r0(fn, target, paths, extra, result) {
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
        let o = (0, get_value_1.default)(target, p1);
        let p2 = paths.slice(symIndex);
        return r0(fn, o, p2, extra, result);
    }
}
exports.r0 = r0;
function ObjectKeysExtra(obj, options = {}) {
    let keys = options.nonEnumerable ?
        Object.getOwnPropertyNames(obj)
        : Object.keys(obj);
    if (options.symbol) {
        keys.push(...Object.getOwnPropertySymbols(obj));
    }
    return keys;
}
exports.ObjectKeysExtra = ObjectKeysExtra;
/**
 * handle input to paths
 *
 * @param {string | ITSKeys[]} paths
 * @returns {ITSKeys[]}
 */
function p(paths) {
    return p1(p0(paths));
}
exports.p = p;
function p0(paths) {
    if (Array.isArray(paths))
        return paths.slice();
    if (typeof paths === 'symbol')
        return [paths];
    return splitSpecific(paths);
}
exports.p0 = p0;
function p1(paths) {
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
exports.p1 = p1;
/**
 * check all value is true
 *
 * @param {boolean | boolean[]} result
 * @returns {boolean}
 */
function b(result) {
    return Array.isArray(result)
        ? result.every(boolean => !!boolean)
        : result;
}
exports.b = b;
function b_some(result) {
    return Array.isArray(result)
        ? result.some(boolean => !!boolean)
        : result;
}
exports.b_some = b_some;
//# sourceMappingURL=util.js.map