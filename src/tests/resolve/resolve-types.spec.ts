import { Package, resolve } from '../../index.js';

describe('resolve-types', function () {
    it('svelte', function () {
        const pkg: Package = {
            "name": "foobar",
            "exports": {
                ".": {
                    "types": "./build/index.d.ts",
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
                }
            }
        };
        const output = resolve('foobar', pkg, '.', { types: true });
        expect(output).toBe('./build/index.d.ts');
    });
    it('typings is not allowed in the exports specification', function () {
        const pkg: Package = {
            "name": "foobar",
            "exports": {
                ".": {
                    "typings": "./build/index.d.ts",
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
                }
            }
        };
        // const output = resolve('foobar', pkg, '.', { types: true });
        // expect(output).toBe('./ssr.mjs');
        expect(function () {
            resolve('foobar', pkg, '.', { types: true });
        }).toThrowError(new Error('No known conditions for "." entry in "foobar" package'));
    });
    it('solid-js', function () {
        const pkg: Package = {
            "name": "solid-js",
            "exports": {
                ".": {
                    "worker": {
                        "import": {
                            "types": "./types/index.d.ts",
                            "default": "./dist/server.js"
                        },
                        "require": "./dist/server.cjs"
                    },
                    "browser": {
                        "development": {
                            "import": {
                                "types": "./types/index.d.ts",
                                "default": "./dist/dev.js"
                            },
                            "require": "./dist/dev.cjs"
                        },
                        "import": {
                            "types": "./types/index.d.ts",
                            "default": "./dist/solid.js"
                        },
                        "require": "./dist/solid.cjs"
                    },
                    "deno": {
                        "import": {
                            "types": "./types/index.d.ts",
                            "default": "./dist/server.js"
                        },
                        "require": "./dist/server.cjs"
                    },
                    "node": {
                        "import": {
                            "types": "./types/index.d.ts",
                            "default": "./dist/server.js"
                        },
                        "require": "./dist/server.cjs"
                    },
                    "development": {
                        "import": {
                            "types": "./types/index.d.ts",
                            "default": "./dist/dev.js"
                        },
                        "require": "./dist/dev.cjs"
                    },
                    "import": {
                        "types": "./types/index.d.ts",
                        "default": "./dist/solid.js"
                    },
                    "require": "./dist/solid.cjs"
                }
            }
        };
        const output = resolve('foobar', pkg, '.', { types: true });
        expect(output).toBe('./types/index.d.ts');
    });
    it('davinci-eight', function () {
        const pkg: Package = {
            "name": "davinci-eight",
            "exports": {
                ".": {
                    "import": {
                        "types": "./dist/index.d.ts",
                        "default": "./dist/esm/index.js"
                    }
                }
            }
        };
        const output = resolve('foobar', pkg, '.', { types: true });
        expect(output).toBe('./dist/index.d.ts');
    });
    it('types first', function () {
        const pkg: Package = {
            "name": "foobar",
            "exports": {
                ".": {
                    "types": "./dist/index.d.ts",
                    "import": "./dist/esm/index.js"
                }
            }
        };
        const output = resolve('foobar', pkg, '.', { types: true });
        expect(output).toBe('./dist/index.d.ts');
    });
    // https://nodejs.org/api/packages.html#community-conditions-definitions
    // "types" - can be used by typing systems to resolve the typing file for the given export.
    // This condition should always be included first.
    it('types not first', function () {
        // "types" should go above "import" in the example below.
        // But technically, for a JavaScript map, the order may not be predictable.
        // The resolver can help by looking for "types" first, but this should not be relied upon.
        const pkg: Package = {
            "name": "foobar",
            "exports": {
                ".": {
                    "import": "./dist/esm/index.js",
                    "types": "./dist/index.d.ts"
                }
            }
        };
        const output = resolve('foobar', pkg, '.', { types: true });
        expect(output).toBe('./dist/index.d.ts');
    });
});
