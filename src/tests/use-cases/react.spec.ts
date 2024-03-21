import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const REACT: Package = {
    "name": "@types/react",
    "version": "18.0.26",
    "main": "",
    "types": "index.d.ts",
    "typeScriptVersion": "4.2",
    "exports": {
        ".": {
            "types": {
                "default": "./index.d.ts"
            }
        },
        "./next": {
            "types": {
                "default": "./next.d.ts"
            }
        },
        "./experimental": {
            "types": {
                "default": "./experimental.d.ts"
            }
        },
        "./jsx-runtime": {
            "types": {
                "default": "./jsx-runtime.d.ts"
            }
        },
        "./jsx-dev-runtime": {
            "types": {
                "default": "./jsx-dev-runtime.d.ts"
            }
        },
        "./package.json": "./package.json"
    }
};

describe('createResolver', function () {
    describe('react', function () {
        it('main', () => {
            const pkgname = "react";
            const fileName = "https://unpkg.com/@types/react@18.0.26/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, REACT, options);
            expect(function () {
                resolver.resolve("react");
            }).toThrow(new Error('No known conditions for "." entry in "react" package'));
        });
        it('types', () => {
            const pkgname = "react";
            const fileName = "https://unpkg.com/@types/react@18.0.26/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, REACT, options);
            const out = resolver.resolve("react");
            expect(out).toBe("https://unpkg.com/@types/react@18.0.26/index.d.ts");
        });
    });
});
