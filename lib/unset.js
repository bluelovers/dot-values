"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
//import _unset from "unset-value";
const unset_1 = __importDefault(require("./core/unset"));
function unset(target, paths) {
    return util_1.b(util_1.r(unset_1.default, target, paths));
}
exports.unset = unset;
exports.default = unset;
//# sourceMappingURL=unset.js.map