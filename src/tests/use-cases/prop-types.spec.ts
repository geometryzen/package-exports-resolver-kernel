import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const PROP_TYPES: Package = {
    "name": "prop-types",
    "version": "15.8.1",
    "description": "Runtime type checking for React props and similar objects.",
    "sideEffects": false,
    "main": "index.js"
};

const PROP_TYPES_DEFINITELY_TYPED: Package = {
    "name": "@types/prop-types",
    "version": "15.7.5",
    "description": "TypeScript definitions for prop-types",
    "homepage": "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/prop-types",
    "license": "MIT",
    "contributors": [
        {
            "name": "DovydasNavickas",
            "url": "https://github.com/DovydasNavickas",
            "githubUsername": "DovydasNavickas"
        },
        {
            "name": "Ferdy Budhidharma",
            "url": "https://github.com/ferdaber",
            "githubUsername": "ferdaber"
        },
        {
            "name": "Sebastian Silbermann",
            "url": "https://github.com/eps1lon",
            "githubUsername": "eps1lon"
        }
    ],
    "main": "",
    "types": "index.d.ts",
    "repository": {
        "type": "git",
        "url": "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
        "directory": "types/prop-types"
    },
    "scripts": {},
    "dependencies": {},
    "typesPublisherContentHash": "771faec3cc5b1aa1cefc03c5dd3668980da8a0c59785867e473d6d7baea31a8a",
    "typeScriptVersion": "3.9"
};

describe('createResolver', function () {
    describe('prop-types', function () {
        it('main', () => {
            const pkgname = "prop-types";
            const fileName = "https://unpkg.com/prop-types@15.8.1/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, PROP_TYPES, options);
            const out = resolver.resolve("prop-types");
            expect(out).toBe("https://unpkg.com/prop-types@15.8.1/index.js");
        });
        it('types', () => {
            const pkgname = "prop-types";
            const fileName = "https://unpkg.com/prop-types@15.8.1/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, PROP_TYPES, options);
            const out = resolver.resolve("prop-types");
            expect(out).toBeUndefined();
        });
    });
    describe('@types/prop-types', function () {
        it('main', () => {
            const pkgname = "prop-types";
            const fileName = "https://unpkg.com/@types/prop-types@15.7.5/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, PROP_TYPES_DEFINITELY_TYPED, options);
            const out = resolver.resolve("prop-types");
            expect(out).toBeUndefined();
        });
        it('types', () => {
            const pkgname = "prop-types";
            const fileName = "https://unpkg.com/@types/prop-types@15.7.5/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, PROP_TYPES_DEFINITELY_TYPED, options);
            const out = resolver.resolve("prop-types");
            expect(out).toBe("https://unpkg.com/@types/prop-types@15.7.5/index.d.ts");
        });
    });
});
