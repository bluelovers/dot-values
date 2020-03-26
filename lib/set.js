"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const util_1 = require("./util");
const set_value_1 = __importDefault(require("set-value"));
function set(target, paths, value) {
    util_1.r(set_value_1.default, target, paths, value);
    return target;
}
exports.set = set;
exports.default = set;
//# sourceMappingURL=set.js.map