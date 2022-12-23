import type { MapLike } from "./MapLike";

export interface Package extends MapLike<unknown> {
    typings?: string;
    types?: string;
    typesVersions?: MapLike<MapLike<string[]>>;
    main?: string;
    tsconfig?: string;
    type?: string;
    imports?: object;
    module?: string;
    browser?: string | MapLike<string | boolean>;
    exports?: MapLike<unknown> | string | string[];
}
