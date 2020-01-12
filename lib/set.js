"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const set_value_1 = require("set-value");
function set(target, path, value) {
    util_1.r(set_value_1.default, target, util_1.p(path), value);
    return target;
}
exports.set = set;
exports.default = set;
//# sourceMappingURL=set.js.map