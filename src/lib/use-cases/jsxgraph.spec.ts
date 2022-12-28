import { Package } from '../../index.js';
import { createResolver } from '../createResolver.js';
import { Options } from '../Options.js';

const JSXGRAPH: Package = {
    "name": "jsxgraph",
    "version": "1.4.6",
    "main": "distrib/jsxgraphcore.js",
    "types": "distrib/index.d.ts"
};

describe('createResolver', function () {
    describe('jsxgraph', function () {
        it('main', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.4.6/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, JSXGRAPH, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.4.6/distrib/jsxgraphcore.js");
        });
        it('types', () => {
            const pkgname = "jsxgraph";
            const fileName = "https://unpkg.com/jsxgraph@1.4.6/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, JSXGRAPH, options);
            const out = resolver.resolve("jsxgraph");
            expect(out).toBe("https://unpkg.com/jsxgraph@1.4.6/distrib/index.d.ts");
        });
    });
});
