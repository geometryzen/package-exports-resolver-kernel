import { Package } from '../../index.js';
import { createResolver } from '../createResolver.js';
import { Options } from '../Options.js';

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
