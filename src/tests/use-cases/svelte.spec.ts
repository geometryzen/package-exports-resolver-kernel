import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const SVELTE: Package = {
    "name": "svelte",
    "version": "3.55.0",
    "module": "index.mjs",
    "main": "index",
    "exports": {
        "./package.json": "./package.json",
        ".": {
            "types": "./types/runtime/index.d.ts",
            "browser": {
                "import": "./index.mjs",
                "require": "./index.js"
            },
            "node": {
                "import": "./ssr.mjs",
                "require": "./ssr.js"
            },
            "import": "./index.mjs",
            "require": "./index.js"
        },
        "./compiler": {
            "types": "./types/compiler/index.d.ts",
            "import": "./compiler.mjs",
            "require": "./compiler.js"
        },
        "./action": {
            "types": "./types/runtime/action/index.d.ts"
        },
        "./animate": {
            "types": "./types/runtime/animate/index.d.ts",
            "import": "./animate/index.mjs",
            "require": "./animate/index.js"
        },
        "./easing": {
            "types": "./types/runtime/easing/index.d.ts",
            "import": "./easing/index.mjs",
            "require": "./easing/index.js"
        },
        "./internal": {
            "types": "./types/runtime/internal/index.d.ts",
            "import": "./internal/index.mjs",
            "require": "./internal/index.js"
        },
        "./motion": {
            "types": "./types/runtime/motion/index.d.ts",
            "import": "./motion/index.mjs",
            "require": "./motion/index.js"
        },
        "./register": {
            "require": "./register.js"
        },
        "./store": {
            "types": "./types/runtime/store/index.d.ts",
            "import": "./store/index.mjs",
            "require": "./store/index.js"
        },
        "./transition": {
            "types": "./types/runtime/transition/index.d.ts",
            "import": "./transition/index.mjs",
            "require": "./transition/index.js"
        },
        "./elements": {
            "types": "./elements/index.d.ts"
        },
        "./ssr": {
            "types": "./types/runtime/index.d.ts",
            "import": "./ssr.mjs",
            "require": "./ssr.js"
        }
    },
    "engines": {
        "node": ">= 8"
    },
    "types": "types/runtime/index.d.ts"
};

describe('createResolver', function () {
    describe('svelte', function () {
        it('main', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@3.55.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE, options);
            const out = resolver.resolve("svelte");
            expect(out).toBe("https://unpkg.com/svelte@3.55.0/ssr.mjs");
        });
        it('types', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@3.55.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SVELTE, options);
            const out = resolver.resolve("svelte");
            expect(out).toBe("https://unpkg.com/svelte@3.55.0/types/runtime/index.d.ts");
        });
    });
});
