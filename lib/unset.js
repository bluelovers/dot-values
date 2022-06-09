"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unset = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
//import _unset from "unset-value";
const unset_1 = tslib_1.__importDefault(require("./core/unset"));
function unset(target, paths) {
    return (0, util_1.b)((0, util_1.r)(unset_1.default, target, paths));
}
exports.unset = unset;
exports.default = unset;
//# sourceMappingURL=unset.js.map