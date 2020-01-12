"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const unset_value_1 = require("unset-value");
/**
 * @param {Object} target
 * @param {String} path
 * @return {Boolean}
 */
function unset(target, path) {
    return util_1.b(util_1.r(unset_value_1.default, target, util_1.p(path)));
}
exports.unset = unset;
exports.default = unset;
//# sourceMappingURL=unset.js.map