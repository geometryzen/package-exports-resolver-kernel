import { createResolver, Options, Package } from '../../index.js';

const MY_LIB_0_DOT_9_DOT_11: Package = {
    "name": "@geometryzen/my-lib",
    "version": "0.9.11",
    "exports": {
        ".": {
            "default": "./dist/esm/index.min.js",
            "require": "./dist/commonjs/index.js",
            "system": "./dist/system/index.min.js",
            "types": "./dist/index.d.ts"
        }
    },
    "browser": "./dist/umd/index.js",
    "main": "./dist/commonjs/index.js",
    "module": "./dist/esm/index.min.js",
    "types": "./dist/index.d.ts"
};

describe('createResolver', function () {
    describe('@geometryzen/my-lib@0.9.11', function () {
        it('main', () => {
            const pkgname = "@geometryzen/my-lib";
            const fileName = "https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, MY_LIB_0_DOT_9_DOT_11, options);
            const out = resolver.resolve("@geometryzen/my-lib");
            expect(out).toBe("https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/dist/esm/index.min.js");
        });
        it('types', () => {
            const pkgname = "@geometryzen/my-lib";
            const fileName = "https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, MY_LIB_0_DOT_9_DOT_11, options);
            const out = resolver.resolve("@geometryzen/my-lib");
            expect(out).toBe("https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/dist/index.d.ts");
        });
        it('system', () => {
            const pkgname = "@geometryzen/my-lib";
            const fileName = "https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/package.json";
            const options: Options = { conditions: ["system"] };
            const resolver = createResolver(pkgname, fileName, MY_LIB_0_DOT_9_DOT_11, options);
            const out = resolver.resolve("@geometryzen/my-lib");
            expect(out).toBe("https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/dist/system/index.min.js");
        });
        it('system+browser=true', () => {
            const pkgname = "@geometryzen/my-lib";
            const fileName = "https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/package.json";
            // browser: true causes 'browser' to be added as a search condition.
            // require: false causes 'import' to be added as a search condition.
            const options: Options = { browser: true, conditions: ["system"], require: false, fields: [] };
            const resolver = createResolver(pkgname, fileName, MY_LIB_0_DOT_9_DOT_11, options);
            const out = resolver.resolve("@geometryzen/my-lib");
            expect(out).toBe("https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/dist/system/index.min.js");
        });
        it('system+browser=false', () => {
            const pkgname = "@geometryzen/my-lib";
            const fileName = "https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/package.json";
            const options: Options = { browser: false, conditions: ["system"] };
            const resolver = createResolver(pkgname, fileName, MY_LIB_0_DOT_9_DOT_11, options);
            const out = resolver.resolve("@geometryzen/my-lib");
            expect(out).toBe("https://cdn.jsdelivr.net/npm/@geometryzen/my-lib@0.9.11/dist/system/index.min.js");
        });
    });
});
