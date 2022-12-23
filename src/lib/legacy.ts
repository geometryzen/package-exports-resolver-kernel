import { isMapLike } from "./isMapLike";
import { Options } from "./Options";
import { Package } from "./Package";
import { toName } from "./toName";

function assertString(arg: unknown): string {
    if (typeof arg === 'string') {
        return arg;
    }
    else {
        throw new Error();
    }
}

/**
 * @paran pkgname
 * @param pkg
 * @param options
 * @returns
 */
export function legacy(rootModuleName: string, pkg: Package, options: Options = {}): string | boolean | object | undefined {
    if (options.types) {
        const fields = ['types', 'typings'];
        for (let i = 0; i < fields.length; i++) {
            const value = pkg[fields[i]];
            if (value) {
                return assertString(typeof value == 'string' ? ('./' + value.replace(/^\.?\//, '')) : value);
            }
        }
    }
    else {
        let browser = options.browser;
        const fields = options.fields || ['module', 'main'];

        if (browser && !fields.includes('browser')) {
            fields.unshift('browser');
        }

        for (let i = 0; i < fields.length; i++) {
            let value = pkg[fields[i]];
            if (value) {
                if (typeof value == 'string') {
                    //
                }
                else if (isMapLike(value) && fields[i] == 'browser') {
                    if (typeof browser == 'string') {
                        value = value[browser = toName(rootModuleName, browser)];
                        if (value == null) return browser;
                    }
                }
                else {
                    continue;
                }
                if (typeof value === 'string') {
                    return './' + value.replace(/^\.?\//, '');
                }
                else if (typeof value === 'boolean') {
                    return value;
                }
                else if (typeof value === 'object') {
                    return value;
                }
                else {
                    throw new Error(`value => ${JSON.stringify(value)}, typeof value => ${typeof value}`);
                }
            }
        }
    }
    return void 0;
}
