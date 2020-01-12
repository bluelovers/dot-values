"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const get_value_1 = __importDefault(require("get-value"));
/**
 * @param  {Object} target
 * @param  {String} path
 * @param  {*}      value
 * @return {*}
 */
function get(target, path, defaultValue) {
    return util_1.r(get_value_1.default, target, util_1.p(path), { default: defaultValue });
}
exports.get = get;
exports.default = get;
//# sourceMappingURL=get.js.map