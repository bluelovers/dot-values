"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../module.d.ts" />
const get_value_1 = __importDefault(require("get-value"));
// @ts-ignore
const escape_split_1 = __importDefault(require("escape-split"));
const SymStar = Symbol('*');
const splitSpecific = escape_split_1.default({ delimiter: '.', escaper: '\\' });
function r(fn, target, paths, extra, result) {
    paths = p(paths);
    return r0(fn, target, paths, extra, result);
}
exports.r = r;
function r0(fn, target, paths, extra, result) {
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
        return r0(fn, get_value_1.default(target, p1), p2, extra, result);
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