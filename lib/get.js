"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const get_value_1 = __importDefault(require("get-value"));
function get(target, paths, defaultValue) {
    return util_1.r(get_value_1.default, target, paths, { default: defaultValue });
}
exports.get = get;
exports.default = get;
//# sourceMappingURL=get.js.map