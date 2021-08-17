export interface IAction<Type, Payload> {
    type: Type,
    payload: Partial<Payload>
}