import { isMapLike } from "./isMapLike";
import { legacy } from "./legacy";
import { Options } from "./Options";
import { Package } from "./Package";
import { toName } from "./toName";

/**
 *
 * @param value
 * @param keys Determine which properties we are allowed to dive into when the value is an object.
 * @returns
 */
function loop(value: unknown, keys: Pick<Set<string>, 'has'>): string | undefined {
    if (typeof value === 'string') {
        if (keys.has("types")) {
            if (value.endsWith(".d.ts")) {
                return value;
            }
            else {
                return void 0;
            }
        }
        else {
            return value;
        }
    }

    if (value) {
        if (Array.isArray(value)) {
            // If it's an array of strings, try each one in turn.
            for (let idx = 0; idx < value.length; idx++) {
                const tmp = loop(value[idx], keys);
                if (tmp) {
                    return tmp;
                }
            }
        }
        else if (isMapLike(value)) {
            // When resolving JavaScript files, we are reading through the object properties in the provided order.
            // However if we are looking for type definitions we should be more careful...
            // https://nodejs.org/api/packages.html#community-conditions-definitions
            // "types" - can be used by typing systems to resolve the typing file for the given export.
            // This condition should always be included first.
            if (keys.has("types")) {
                for (const idx in value) {
                    if (idx === "types") {
                        return loop(value[idx], keys);
                    }
                }
            }
            // Similarly, when looking for the System format, we don't want "import" or "default".
            // This will allow "types", "system", "import", "require", and "default" to coexist.
            if (keys.has("system")) {
                for (const idx in value) {
                    if (idx === "system") {
                        return loop(value[idx], keys);
                    }
                }
            }
            for (const idx in value) {
                if (keys.has(idx)) {
                    return loop(value[idx], keys);
                }
            }
        }
    }
    return void 0;
}

function noKnownConditions(name: string, entry: string): never {
    throw new Error(`No known conditions for "${entry}" entry in "${name}" package`);
}

function missingEntry(name: string, entry: string): never {
    throw new Error(`Missing "${entry}" export in "${name}" package`);
}

function toTarget(rootModuleName: string, moduleName: string): string {
    let target = toName(rootModuleName, moduleName);
    if (target[0] !== '.') target = './' + target;
    return target;
}

function isSingleExport(exports: object): boolean {
    let isSingle = false;
    for (const key in exports) {
        isSingle = key[0] !== '.';
        break;
    }
    return isSingle;
}

function makeAllows(options: Options): Pick<Set<string>, 'has'> {
    if (options.types) {
        const { browser, require, unsafe, conditions = [] } = options;
        const allows = new Set(['types', 'default', ...conditions]);
        unsafe || allows.add(require ? 'require' : 'import');
        unsafe || allows.add(browser ? 'browser' : 'node');
        return allows;
    }
    else {
        const { browser, require, unsafe, conditions = [] } = options;
        const allows = new Set(['default', ...conditions]);
        unsafe || allows.add(require ? 'require' : 'import');
        unsafe || allows.add(browser ? 'browser' : 'node');
        return allows;
    }
}

/**
 * @param rootModuleName The name or the root module
 * @param pkg package.json contents
 * @param moduleName entry name or import path
 * @param options
 */
export function resolve(rootModuleName: string, pkg: Package, moduleName = '.', options: Options = {}): string | boolean | object | never {
    const { exports } = pkg;

    if (exports) {
        const target = toTarget(rootModuleName, moduleName);

        if (typeof exports === 'string') {
            return target === '.' ? exports : missingEntry(rootModuleName, target);
        }
        if (Array.isArray(exports)) {
            throw new Error("TODO");
        }

        const allows = makeAllows(options);

        const isSingle = isSingleExport(exports);

        if (isSingle) {
            if (target === '.') {
                // It appers that loop could return something falsey?
                return loop(exports, allows) || noKnownConditions(rootModuleName, target);
            }
            else {
                return missingEntry(rootModuleName, target);
            }
        }

        if (exports[target]) {
            return loop(exports[target], allows) || noKnownConditions(rootModuleName, target);
        }

        for (const key in exports) {
            const last = key[key.length - 1];
            if (last === '/' && target.startsWith(key)) {
                const tmp = loop(exports[key], allows);
                if (tmp) {
                    return tmp + target.substring(key.length);
                }
                else {
                    return noKnownConditions(rootModuleName, target);
                }
            }
            if (last === '*' && target.startsWith(key.slice(0, -1))) {
                // do not trigger if no *content* to inject
                if (target.substring(key.length - 1).length > 0) {
                    const tmp = loop(exports[key], allows);
                    if (tmp) {
                        return tmp.replace('*', target.substring(key.length - 1));
                    }
                    else {
                        return noKnownConditions(rootModuleName, target);
                    }
                }
            }
        }

        return missingEntry(rootModuleName, target);
    }
    else {
        return legacy(rootModuleName, pkg, options);
    }
}
