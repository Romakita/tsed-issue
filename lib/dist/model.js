"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetValueResponse = exports.SetValueResponseEntry = exports.ParameterRequest = exports.Parameter = void 0;
const tslib_1 = require("tslib");
const schema_1 = require("@tsed/schema");
let Parameter = class Parameter {
    constructor() {
        this.parameter = -1;
    }
};
tslib_1.__decorate([
    schema_1.Required(),
    schema_1.Description('The id of the parameter.'),
    tslib_1.__metadata("design:type", Number)
], Parameter.prototype, "parameter", void 0);
Parameter = tslib_1.__decorate([
    schema_1.Example({ parameter: 700 })
], Parameter);
exports.Parameter = Parameter;
let ParameterRequest = class ParameterRequest extends Parameter {
    constructor() {
        super(...arguments);
        this.destination = 0;
    }
};
tslib_1.__decorate([
    schema_1.Default(0),
    schema_1.Minimum(0),
    schema_1.Maximum(127),
    schema_1.Description('The DST address there the packet is sent on the Bus'),
    tslib_1.__metadata("design:type", Number)
], ParameterRequest.prototype, "destination", void 0);
ParameterRequest = tslib_1.__decorate([
    schema_1.Example({ parameter: 700, destination: 0 })
], ParameterRequest);
exports.ParameterRequest = ParameterRequest;
class SetValueResponseEntry {
}
tslib_1.__decorate([
    schema_1.Required(),
    tslib_1.__metadata("design:type", Number)
], SetValueResponseEntry.prototype, "status", void 0);
exports.SetValueResponseEntry = SetValueResponseEntry;
let SetValueResponse = class SetValueResponse {
};
SetValueResponse = tslib_1.__decorate([
    schema_1.Example({
        '700': {
            status: 1
        },
        '710': {
            status: 1
        }
    }),
    schema_1.AdditionalProperties(schema_1.from(SetValueResponseEntry))
], SetValueResponse);
exports.SetValueResponse = SetValueResponse;
//# sourceMappingURL=model.js.map