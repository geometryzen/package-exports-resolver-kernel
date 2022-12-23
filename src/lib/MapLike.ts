/**
 * A JavaScript object that can be indexed.
 * The key type is string.
 * The value type corresponds to the generic parameter.
 */
export interface MapLike<T> {
    [index: string]: T;
}
