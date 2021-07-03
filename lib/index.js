"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteValue = exports.delete = exports.unsetValue = exports.hasValue = exports.setValue = exports.getValue = exports.unset = exports.has = exports.set = exports.get = void 0;
const tslib_1 = require("tslib");
const get_1 = (0, tslib_1.__importDefault)(require("./get"));
exports.get = get_1.default;
exports.getValue = get_1.default;
const set_1 = (0, tslib_1.__importDefault)(require("./set"));
exports.set = set_1.default;
exports.setValue = set_1.default;
const has_1 = (0, tslib_1.__importDefault)(require("./has"));
exports.has = has_1.default;
exports.hasValue = has_1.default;
const unset_1 = (0, tslib_1.__importDefault)(require("./unset"));
exports.unset = unset_1.default;
exports.unsetValue = unset_1.default;
exports.delete = unset_1.default;
exports.deleteValue = unset_1.default;
exports.default = {
    get: get_1.default,
    set: set_1.default,
    has: has_1.default,
    unset: unset_1.default,
    getValue: get_1.default,
    setValue: set_1.default,
    hasValue: has_1.default,
    unsetValue: unset_1.default,
    delete: unset_1.default,
    deleteValue: unset_1.default,
};
//# sourceMappingURL=index.js.map