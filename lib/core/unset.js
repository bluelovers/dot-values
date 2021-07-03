"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._unset = void 0;
const tslib_1 = require("tslib");
/**
 * Created by user on 2020/1/13.
 */
const isobject_1 = (0, tslib_1.__importDefault)(require("isobject"));
const split_string_1 = (0, tslib_1.__importDefault)(require("split-string"));
function _unset(obj, paths) {
    if (!(0, isobject_1.default)(obj)) {
        throw new TypeError(`expected an object. but got ${obj}`);
    }
    if (!Array.isArray(paths)) {
        paths = (0, split_string_1.default)(paths);
    }
    else {
        paths = paths.slice();
    }
    let prop;
    let target = obj;
    let latest = paths.pop();
    for (prop of paths) {
        if (prop in target) {
            target = target[prop];
        }
        else {
            return true;
        }
    }
    if (latest in target) {
        return (delete target[latest]);
    }
    return true;
}
exports._unset = _unset;
exports.default = _unset;
//# sourceMappingURL=unset.js.map