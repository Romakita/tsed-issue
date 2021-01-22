export declare class Parameter {
    parameter: number;
}
export declare class ParameterRequest extends Parameter {
    destination: number;
}
export declare class SetValueResponseEntry {
    status: number;
}
export declare class SetValueResponse {
    [key: string]: SetValueResponseEntry;
}
