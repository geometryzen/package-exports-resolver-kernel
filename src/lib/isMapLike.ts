import { MapLike } from "./MapLike";

export function isMapLike(value: unknown): value is MapLike<unknown> {
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return false;
        }
        else if (value === null) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
