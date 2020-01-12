"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
exports.get = get_1.default;
exports.getValue = get_1.default;
const set_1 = __importDefault(require("./set"));
exports.set = set_1.default;
exports.setValue = set_1.default;
const has_1 = __importDefault(require("./has"));
exports.has = has_1.default;
exports.hasValue = has_1.default;
const unset_1 = __importDefault(require("./unset"));
exports.unset = unset_1.default;
exports.unsetValue = unset_1.default;
exports.default = {
    get: get_1.default,
    set: set_1.default,
    has: has_1.default,
    unset: unset_1.default,
};
//# sourceMappingURL=index.js.map