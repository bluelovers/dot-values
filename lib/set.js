"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const set_value_1 = tslib_1.__importDefault(require("set-value"));
function set(target, paths, value, options) {
    (0, util_1.r)(set_value_1.default, target, paths, value);
    return target;
}
exports.set = set;
exports.default = set;
//# sourceMappingURL=set.js.map