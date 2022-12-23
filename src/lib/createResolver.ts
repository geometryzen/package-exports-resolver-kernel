import { absolute } from './absolute';
import { legacy } from './legacy';
import { Options } from './Options';
import { Package } from './Package';
import { resolve } from './resolve';
import { Resolver } from './Resolver';

class PackageJsonResolver implements Resolver {
    constructor(private readonly rootModuleName: string, private readonly fileName: string, private readonly pkg: Package, private readonly options: Options) {
        // Nothing to see here yet.
    }
    resolve(moduleName: string): string {
        if (this.pkg.exports) {
            const path = resolve(this.rootModuleName, this.pkg, moduleName, this.options);
            if (typeof path === 'string') {
                return absolute(this.fileName, path);
            }
            else {
                throw new Error();
            }
        }
        else {
            const path = legacy(this.rootModuleName, this.pkg, this.options);
            if (typeof path === 'string') {
                return absolute(this.fileName, path);
            }
            else {
                throw new Error(`path=${path}`);
            }
        }
    }
}

export function createResolver(rootModuleName: string, fileName: string, pkg: Package, options: Options): Resolver {
    return new PackageJsonResolver(rootModuleName, fileName, pkg, options);
}