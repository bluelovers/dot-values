"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const has_value_1 = __importDefault(require("has-value"));
/**
 * @param  {Object}  target
 * @param  {String}  path
 * @return {Boolean}
 */
function has(target, path) {
    return util_1.b(util_1.r(has_value_1.default, target, util_1.p(path)));
}
exports.has = has;
exports.default = has;
//# sourceMappingURL=has.js.map