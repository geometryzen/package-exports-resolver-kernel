import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const SVELTE_3_DOT_55_DOT_0: Package = {
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

const SVELTE_5_DOT_0_DOT_0: Package = {
    "name": "svelte",
    "version": "5.0.0",
    "type": "module",
    "types": "./types/index.d.ts",
    "engines": {
        "node": ">=18"
    },
    "module": "src/main/main-client.js",
    "main": "src/main/main-client.js",
    "exports": {
        ".": {
            "types": "./types/index.d.ts",
            "browser": "./src/main/main-client.js",
            "default": "./src/main/main-server.js"
        },
        "./package.json": "./package.json",
        "./action": {
            "types": "./types/index.d.ts"
        },
        "./animate": {
            "types": "./types/index.d.ts",
            "default": "./src/animate/index.js"
        },
        "./compiler": {
            "types": "./types/index.d.ts",
            "require": "./compiler.cjs",
            "default": "./src/compiler/index.js"
        },
        "./easing": {
            "types": "./types/index.d.ts",
            "default": "./src/easing/index.js"
        },
        "./elements": {
            "types": "./elements.d.ts"
        },
        "./internal": {
            "default": "./src/internal/index.js"
        },
        "./internal/disclose-version": {
            "default": "./src/internal/disclose-version.js"
        },
        "./internal/server": {
            "default": "./src/internal/server/index.js"
        },
        "./legacy": {
            "types": "./types/index.d.ts",
            "browser": "./src/legacy/legacy-client.js",
            "default": "./src/legacy/legacy-server.js"
        },
        "./motion": {
            "types": "./types/index.d.ts",
            "default": "./src/motion/index.js"
        },
        "./reactivity": {
            "types": "./types/index.d.ts",
            "default": "./src/reactivity/index.js"
        },
        "./server": {
            "types": "./types/index.d.ts",
            "default": "./src/server/index.js"
        },
        "./store": {
            "types": "./types/index.d.ts",
            "default": "./src/store/index.js"
        },
        "./transition": {
            "types": "./types/index.d.ts",
            "default": "./src/transition/index.js"
        }
    }
};

describe('createResolver', function () {
    describe('svelte@3.55.0', function () {
        it('main', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@3.55.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE_3_DOT_55_DOT_0, options);
            const out = resolver.resolve("svelte");
            expect(out).toBe("https://unpkg.com/svelte@3.55.0/ssr.mjs");
        });
        it('types', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@3.55.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SVELTE_3_DOT_55_DOT_0, options);
            const out = resolver.resolve("svelte");
            expect(out).toBe("https://unpkg.com/svelte@3.55.0/types/runtime/index.d.ts");
        });
    });
    describe('svelte@5.0.0', function () {
        it('svelte .', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            const out = resolver.resolve("svelte");
            // Notice that we don't get the "main" entry because we have "exports".
            expect(out).toBe("https://unpkg.com/svelte@5.0.0/src/main/main-server.js");
        });
        it('svelte . (browser)', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = { browser: true };
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            const out = resolver.resolve("svelte");
            expect(out).toBe("https://unpkg.com/svelte@5.0.0/src/main/main-client.js");
        });
        it('svelte . (types)', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            try {
                const out = resolver.resolve("svelte");
                expect(out).toBe("https://unpkg.com/svelte@5.0.0/types/index.d.ts");
            }
            catch (e) {
                // 
            }
        });
        it('svelte/action', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            expect(function () {
                resolver.resolve("svelte/action");
            }).toThrow(new Error('No known conditions for "./action" entry in "svelte" package'));
        });
        it('svelte/action (types)', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            const out = resolver.resolve("svelte/action");
            expect(out).toBe("https://unpkg.com/svelte@5.0.0/types/index.d.ts");
        });
        it('svelte/internal/disclose-version', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            const out = resolver.resolve("svelte/internal/disclose-version");
            expect(out).toBe("https://unpkg.com/svelte@5.0.0/src/internal/disclose-version.js");
        });
        it('svelte/internal/server', () => {
            const pkgname = "svelte";
            const fileName = "https://unpkg.com/svelte@5.0.0/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SVELTE_5_DOT_0_DOT_0, options);
            const out = resolver.resolve("svelte/internal/server");
            expect(out).toBe("https://unpkg.com/svelte@5.0.0/src/internal/server/index.js");
        });
    });
});
