"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const has_value_1 = tslib_1.__importDefault(require("has-value"));
function has(target, paths) {
    return (0, util_1.b)((0, util_1.r)(has_value_1.default, target, paths));
}
exports.has = has;
exports.default = has;
//# sourceMappingURL=has.js.map