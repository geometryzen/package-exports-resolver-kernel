import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const REACT_DOM: Package = {
    "name": "react-dom",
    "version": "18.2.0",
    "main": "index.js",
    "exports": {
        ".": "./index.js",
        "./client": "./client.js",
        "./server": {
            "deno": "./server.browser.js",
            "worker": "./server.browser.js",
            "browser": "./server.browser.js",
            "default": "./server.node.js"
        },
        "./server.browser": "./server.browser.js",
        "./server.node": "./server.node.js",
        "./profiling": "./profiling.js",
        "./test-utils": "./test-utils.js",
        "./package.json": "./package.json"
    },
    "browser": {
        "./server.js": "./server.browser.js"
    }
};

describe('createResolver', function () {
    describe('react-dom', function () {
        it('main', () => {
            const pkgname = "react-dom";
            const fileName = "https://unpkg.com/react-dom@18.2.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, REACT_DOM, options);
            const out = resolver.resolve("react-dom");
            expect(out).toBe("https://unpkg.com/react-dom@18.2.0/index.js");
        });
        it('types', () => {
            const pkgname = "react-dom";
            const fileName = "https://unpkg.com/react-dom@18.2.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, REACT_DOM, options);
            expect(function () {
                resolver.resolve("react-dom");
            }).toThrowError(new Error('No known conditions for "." entry in "react-dom" package'));
        });
    });
});
