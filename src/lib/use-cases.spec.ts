import { Package } from '../index.js';
import { createResolver } from './createResolver.js';
import { Options } from './Options.js';

const DAVINCI_EIGHT: Package = {
    "name": "davinci-eight",
    "version": "8.4.47",
    "exports": {
        ".": {
            "types": "./dist/index.d.ts",
            "import": "./dist/esm/index.js"
        }
    },
    "browser": "./dist/umd/index.js",
    "module": "./dist/esm/index.js",
    "types": "./dist/index.d.ts"
};

const JSXGRAPH: Package = {
    "name": "jsxgraph",
    "version": "1.4.6",
    "main": "distrib/jsxgraphcore.js",
    "types": "distrib/index.d.ts"
};

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

const SOLID_JS: Package = {
    "name": "solid-js",
    "description": "A declarative JavaScript library for building user interfaces.",
    "version": "1.6.6",
    "author": "Ryan Carniato",
    "license": "MIT",
    "homepage": "https://solidjs.com",
    "repository": {
        "type": "git",
        "url": "https://github.com/solidjs/solid"
    },
    "main": "./dist/server.cjs",
    "module": "./dist/server.js",
    "browser": {
        "./dist/server.cjs": "./dist/solid.cjs",
        "./dist/server.js": "./dist/solid.js"
    },
    "unpkg": "./dist/solid.cjs",
    "types": "types/index.d.ts",
    "sideEffects": false,
    "type": "module",
    "files": [
        "dist",
        "store/dist",
        "store/types",
        "store/package.json",
        "web/dist",
        "web/types",
        "web/package.json",
        "h/dist",
        "h/types",
        "h/package.json",
        "h/jsx-runtime/dist",
        "h/jsx-runtime/types",
        "h/jsx-runtime/package.json",
        "h/jsx-dev-runtime/package.json",
        "html/dist",
        "html/types",
        "html/package.json",
        "universal/dist",
        "universal/types",
        "universal/package.json",
        "types",
        "jsx-runtime.d.ts"
    ],
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
        },
        "./dist/*": "./dist/*",
        "./jsx-runtime": {
            "types": "./types/jsx.d.ts",
            "default": "./dist/solid.js"
        },
        "./jsx-dev-runtime": {
            "types": "./types/jsx.d.ts",
            "default": "./dist/solid.js"
        },
        "./store": {
            "worker": {
                "import": {
                    "types": "./store/types/index.d.ts",
                    "default": "./store/dist/server.js"
                },
                "require": "./store/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "import": {
                        "types": "./store/types/index.d.ts",
                        "default": "./store/dist/dev.js"
                    },
                    "require": "./store/dist/dev.cjs"
                },
                "import": {
                    "types": "./store/types/index.d.ts",
                    "default": "./store/dist/store.js"
                },
                "require": "./store/dist/store.cjs"
            },
            "deno": {
                "import": {
                    "types": "./store/types/index.d.ts",
                    "default": "./store/dist/server.js"
                },
                "require": "./store/dist/server.cjs"
            },
            "node": {
                "import": {
                    "types": "./store/types/index.d.ts",
                    "default": "./store/dist/server.js"
                },
                "require": "./store/dist/server.cjs"
            },
            "development": {
                "import": {
                    "types": "./store/types/index.d.ts",
                    "default": "./store/dist/dev.js"
                },
                "require": "./store/dist/dev.cjs"
            },
            "import": {
                "types": "./store/types/index.d.ts",
                "default": "./store/dist/store.js"
            },
            "require": "./store/dist/store.cjs"
        },
        "./store/dist/*": "./store/dist/*",
        "./web": {
            "worker": {
                "import": {
                    "types": "./web/types/index.d.ts",
                    "default": "./web/dist/server.js"
                },
                "require": "./web/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "import": {
                        "types": "./web/types/index.d.ts",
                        "default": "./web/dist/dev.js"
                    },
                    "require": "./web/dist/dev.cjs"
                },
                "import": {
                    "types": "./web/types/index.d.ts",
                    "default": "./web/dist/web.js"
                },
                "require": "./web/dist/web.cjs"
            },
            "deno": {
                "import": {
                    "types": "./web/types/index.d.ts",
                    "default": "./web/dist/server.js"
                },
                "require": "./web/dist/server.cjs"
            },
            "node": {
                "import": {
                    "types": "./web/types/index.d.ts",
                    "default": "./web/dist/server.js"
                },
                "require": "./web/dist/server.cjs"
            },
            "development": {
                "import": {
                    "types": "./web/types/index.d.ts",
                    "default": "./web/dist/dev.js"
                },
                "require": "./web/dist/dev.cjs"
            },
            "import": {
                "types": "./web/types/index.d.ts",
                "default": "./web/dist/web.js"
            },
            "require": "./web/dist/web.cjs"
        },
        "./web/dist/*": "./web/dist/*",
        "./universal": {
            "development": {
                "import": {
                    "types": "./universal/types/index.d.ts",
                    "default": "./universal/dist/dev.js"
                },
                "require": "./universal/dist/dev.cjs"
            },
            "import": {
                "types": "./universal/types/index.d.ts",
                "default": "./universal/dist/universal.js"
            },
            "require": "./universal/dist/universal.cjs"
        },
        "./universal/dist/*": "./universal/dist/*",
        "./h": {
            "import": {
                "types": "./h/types/index.d.ts",
                "default": "./h/dist/h.js"
            },
            "require": "./h/dist/h.cjs"
        },
        "./h/jsx-runtime": {
            "import": {
                "types": "./h/jsx-runtime/types/index.d.ts",
                "default": "./h/jsx-runtime/dist/jsx.js"
            },
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/jsx-dev-runtime": {
            "import": {
                "types": "./h/jsx-runtime/types/index.d.ts",
                "default": "./h/jsx-runtime/dist/jsx.js"
            },
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/dist/*": "./h/dist/*",
        "./html": {
            "import": {
                "types": "./html/types/index.d.ts",
                "default": "./html/dist/html.js"
            },
            "require": "./html/dist/html.cjs"
        },
        "./html/dist/*": "./html/dist/*"
    }
};

describe('createResolver', function () {
    describe('core', function () {
        it('should be a function', () => {
            expect(typeof createResolver).toBe('function');
        });
    });
    describe('davinci-eight', function () {
        it('main', () => {
            const pkgname = "davinci-eight";
            const fileName = "https://unpkg.com/davinci-eight@8.4.47/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, DAVINCI_EIGHT, options);
            const out = resolver.resolve("davinci-eight");
            expect(out).toBe("https://unpkg.com/davinci-eight@8.4.47/dist/esm/index.js");
        });
        it('types', () => {
            const pkgname = "davinci-eight";
            const fileName = "https://unpkg.com/davinci-eight@8.4.47/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, DAVINCI_EIGHT, options);
            const out = resolver.resolve("davinci-eight");
            expect(out).toBe("https://unpkg.com/davinci-eight@8.4.47/dist/index.d.ts");
        });
    });
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
    describe('react', function () {
        it('main', () => {
            const pkgname = "react";
            const fileName = "https://unpkg.com/@types/react@18.0.26/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, REACT, options);
            expect(function () {
                resolver.resolve("react");
            }).toThrowError(new Error('No known conditions for "." entry in "react" package'));
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
    describe('solid-js', function () {
        it('main', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.6.6/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SOLID_JS, options);
            const out = resolver.resolve("solid-js");
            expect(out).toBe("https://unpkg.com/solid-js@1.6.6/dist/server.js");
        });
        it('types', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.6.6/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SOLID_JS, options);
            const out = resolver.resolve("solid-js");
            expect(out).toBe("https://unpkg.com/solid-js@1.6.6/types/index.d.ts");
        });
    });
});
