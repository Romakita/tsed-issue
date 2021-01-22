import { AdditionalProperties, Default, Description, Enum, Example, from, Maximum, Minimum, Required, } from "@tsed/schema";

@Example({ parameter: 700 })
export class Parameter {
    
    @Required()
    @Description('The id of the parameter.')
    parameter:	number = -1
}

@Example({ parameter: 700, destination: 0 })
export class ParameterRequest extends Parameter {
    @Default(0)
    @Minimum(0)
    @Maximum(127)
    @Description('The DST address there the packet is sent on the Bus')
    destination: number = 0
}

export class SetValueResponseEntry {
    @Required()
    status!: number
}

@Example({
    '700': {
        status: 1
    },
    '710': {
        status: 1
    }
})
@AdditionalProperties(from(SetValueResponseEntry))
export class SetValueResponse {
    [key: string]: SetValueResponseEntry
}
