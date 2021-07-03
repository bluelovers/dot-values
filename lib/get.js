"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const get_value_1 = (0, tslib_1.__importDefault)(require("get-value"));
function get(target, paths, defaultValue) {
    return (0, util_1.r)(get_value_1.default, target, paths, { default: defaultValue });
}
exports.get = get;
exports.default = get;
//# sourceMappingURL=get.js.map