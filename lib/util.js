"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_value_1 = require("get-value");
/**
 * @param  {String} fn
 * @param  {Object} target
 * @param  {Array.<String>} path
 * @param  {*} extra
 * @param  {Array} result (optional)
 * @return {*}
 */
function r(fn, target, path, extra, result) {
    let symIndex = path.indexOf('*'), hasResult = Array.isArray(result), isLast = !path.length;
    if (symIndex < 0 || isLast) {
        let value = isLast
            ? target
            // @ts-ignore
            : fn(target, path.join('.'), extra);
        if (hasResult) {
            result.push(value);
        }
        return value;
    }
    result = hasResult ? result : [];
    if (!(symIndex === 0 && Array.isArray(target))) {
        return r(fn, get_value_1.default(target, path.shift()), path, extra, result);
    }
    path.shift();
    target.forEach((target) => {
        r(fn, target, Array.from(path), extra, result);
    });
    return result;
}
exports.r = r;
/**
 * @param {String|Array} path
 * @return {Array.<String>}
 */
function p(path) {
    if (Array.isArray(path))
        return path;
    return path.split(/\.*(\*)\.*/)
        .filter(segment => segment !== '');
}
exports.p = p;
/**
 * @param {Array|Boolean} result
 * @return {Boolean}
 */
function b(result) {
    return Array.isArray(result)
        ? !result.filter(boolean => !boolean).length
        : result;
}
exports.b = b;
//# sourceMappingURL=util.js.map