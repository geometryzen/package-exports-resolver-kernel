import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

/**
 * jsxgraph@1.4.6
 */
const JSXGRAPH_1_DOT_4_DOT_6: Package = {
    "name": "jsxgraph",
    "version": "1.4.6",
    "main": "distrib/jsxgraphcore.js",
    "types": "distrib/index.d.ts"
};

/**
 * jsxgraph@1.8.0
 */
const JSXGRAPH_1_DOT_8_DOT_0: Package = {
    "name": "jsxgraph",
    "version": "1.8.0",
    "exports": {
        "types": "./src/index.d.ts",
        "default": "./src/index.js"
    },
    "main": "./distrib/jsxgraphcore.js",
    "module": "./src/index.js",
    "types": "./src/index.d.ts"
};

describe('createResolver', function () {
    describe('jsxgraph@1.4.6', function () {
        it('main', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.4.6/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, JSXGRAPH_1_DOT_4_DOT_6, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.4.6/distrib/jsxgraphcore.js");
        });
        it('types', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.4.6/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, JSXGRAPH_1_DOT_4_DOT_6, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.4.6/distrib/index.d.ts");
        });
    });
    describe('jsxgraph@1.8.0', function () {
        it('main', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.8.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, JSXGRAPH_1_DOT_8_DOT_0, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.8.0/src/index.js");
        });
        it('types', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.8.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, JSXGRAPH_1_DOT_8_DOT_0, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.8.0/src/index.d.ts");
        });
    });
});
