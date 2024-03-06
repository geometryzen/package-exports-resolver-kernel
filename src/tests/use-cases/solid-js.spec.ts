import { Package } from '../../index.js';
import { createResolver } from '../../lib/createResolver.js';
import { Options } from '../../lib/Options.js';

const SOLID_JS_1_DOT_6_DOT_6: Package = {
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

const SOLID_JS_1_DOT_7_DOT_1: Package = {
    "name": "solid-js",
    "description": "A declarative JavaScript library for building user interfaces.",
    "version": "1.8.15",
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
        "web/storage/dist",
        "web/storage/types",
        "web/storage/package.json",
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
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./types/index.d.ts",
                    "import": "./dist/dev.js",
                    "require": "./dist/dev.cjs"
                },
                "types": "./types/index.d.ts",
                "import": "./dist/solid.js",
                "require": "./dist/solid.cjs"
            },
            "deno": {
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "node": {
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "development": {
                "types": "./types/index.d.ts",
                "import": "./dist/dev.js",
                "require": "./dist/dev.cjs"
            },
            "types": "./types/index.d.ts",
            "import": "./dist/solid.js",
            "require": "./dist/solid.cjs"
        },
        "./dist/*": "./dist/*",
        "./types/*": "./types/*",
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
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./store/types/index.d.ts",
                    "import": "./store/dist/dev.js",
                    "require": "./store/dist/dev.cjs"
                },
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/store.js",
                "require": "./store/dist/store.cjs"
            },
            "deno": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "node": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "development": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/dev.js",
                "require": "./store/dist/dev.cjs"
            },
            "types": "./store/types/index.d.ts",
            "import": "./store/dist/store.js",
            "require": "./store/dist/store.cjs"
        },
        "./store/dist/*": "./store/dist/*",
        "./store/types/*": "./store/types/*",
        "./web": {
            "worker": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./web/types/index.d.ts",
                    "import": "./web/dist/dev.js",
                    "require": "./web/dist/dev.cjs"
                },
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/web.js",
                "require": "./web/dist/web.cjs"
            },
            "deno": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "node": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "development": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/dev.js",
                "require": "./web/dist/dev.cjs"
            },
            "types": "./web/types/index.d.ts",
            "import": "./web/dist/web.js",
            "require": "./web/dist/web.cjs"
        },
        "./web/storage": {
            "types": "./web/storage/types/index.d.ts",
            "import": "./web/storage/dist/storage.js",
            "require": "./web/storage/dist/storage.cjs"
        },
        "./web/dist/*": "./web/dist/*",
        "./web/types/*": "./web/types/*",
        "./universal": {
            "development": {
                "types": "./universal/types/index.d.ts",
                "import": "./universal/dist/dev.js",
                "require": "./universal/dist/dev.cjs"
            },
            "types": "./universal/types/index.d.ts",
            "import": "./universal/dist/universal.js",
            "require": "./universal/dist/universal.cjs"
        },
        "./universal/dist/*": "./universal/dist/*",
        "./universal/types/*": "./universal/types/*",
        "./h": {
            "types": "./h/types/index.d.ts",
            "import": "./h/dist/h.js",
            "require": "./h/dist/h.cjs"
        },
        "./h/jsx-runtime": {
            "types": "./h/jsx-runtime/types/index.d.ts",
            "import": "./h/jsx-runtime/dist/jsx.js",
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/jsx-dev-runtime": {
            "types": "./h/jsx-runtime/types/index.d.ts",
            "import": "./h/jsx-runtime/dist/jsx.js",
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/dist/*": "./h/dist/*",
        "./h/types/*": "./h/types/*",
        "./html": {
            "types": "./html/types/index.d.ts",
            "import": "./html/dist/html.js",
            "require": "./html/dist/html.cjs"
        },
        "./html/dist/*": "./html/dist/*",
        "./package.json": "./package.json"
    },
    "keywords": [
        "solid",
        "solidjs",
        "ui",
        "reactive",
        "components",
        "compiler",
        "performance"
    ],
    "dependencies": {
        "csstype": "^3.1.0",
        "seroval": "^1.0.3",
        "seroval-plugins": "^1.0.3"
    },
    "scripts": {
        "build": "npm-run-all -nl build:*",
        "build:clean": "rimraf dist/ coverage/ store/dist/ web/dist/ h/dist/ h/jsx-runtime/dist html/dist/",
        "build:js": "rollup -c",
        "types": "npm-run-all -nl types:*",
        "types:clean": "rimraf types/ store/types/ web/types/ h/types/ h/jsx-runtime/types html/types/",
        "types:copy": "ncp ../../node_modules/dom-expressions/src/jsx.d.ts ./src/jsx.d.ts && ncp ../../node_modules/dom-expressions/src/jsx-h.d.ts ./h/jsx-runtime/src/jsx.d.ts",
        "types:src": "tsc --project ./tsconfig.build.json && ncp ../../node_modules/dom-expressions/src/jsx.d.ts ./types/jsx.d.ts",
        "types:web": "tsc --project ./web/tsconfig.build.json",
        "types:web-storage": "tsc --project ./web/storage/tsconfig.build.json",
        "types:copy-web": "ncp ../../node_modules/dom-expressions/src/client.d.ts ./web/types/client.d.ts && ncp ../../node_modules/dom-expressions/src/server.d.ts ./web/types/server.d.ts",
        "types:store": "tsc --project ./store/tsconfig.build.json",
        "types:html": "tsc --project ./html/tsconfig.json && ncp ../../node_modules/lit-dom-expressions/types/index.d.ts ./html/types/lit.d.ts",
        "types:h": "tsc --project ./h/tsconfig.json && ncp ../../node_modules/hyper-dom-expressions/types/index.d.ts ./h/types/hyperscript.d.ts",
        "types:jsx": "rimraf ./h/jsx-runtime/types && tsc --project ./h/jsx-runtime/tsconfig.json && ncp ../../node_modules/dom-expressions/src/jsx-h.d.ts ./h/jsx-runtime/types/jsx.d.ts",
        "types:universal": "tsc --project ./universal/tsconfig.json && ncp ../../node_modules/dom-expressions/src/universal.d.ts ./universal/types/universal.d.ts",
        "bench": "node --allow-natives-syntax bench/bench.cjs",
        "link": "symlink-dir . node_modules/solid-js",
        "test": "vitest run",
        "coverage": "vitest run --coverage",
        "test-types": "tsc --project tsconfig.test.json"
    }
};

const SOLID_JS_1_DOT_8_DOT_15: Package = {
    "name": "solid-js",
    "description": "A declarative JavaScript library for building user interfaces.",
    "version": "1.8.15",
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
        "web/storage/dist",
        "web/storage/types",
        "web/storage/package.json",
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
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./types/index.d.ts",
                    "import": "./dist/dev.js",
                    "require": "./dist/dev.cjs"
                },
                "types": "./types/index.d.ts",
                "import": "./dist/solid.js",
                "require": "./dist/solid.cjs"
            },
            "deno": {
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "node": {
                "types": "./types/index.d.ts",
                "import": "./dist/server.js",
                "require": "./dist/server.cjs"
            },
            "development": {
                "types": "./types/index.d.ts",
                "import": "./dist/dev.js",
                "require": "./dist/dev.cjs"
            },
            "types": "./types/index.d.ts",
            "import": "./dist/solid.js",
            "require": "./dist/solid.cjs"
        },
        "./dist/*": "./dist/*",
        "./types/*": "./types/*",
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
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./store/types/index.d.ts",
                    "import": "./store/dist/dev.js",
                    "require": "./store/dist/dev.cjs"
                },
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/store.js",
                "require": "./store/dist/store.cjs"
            },
            "deno": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "node": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/server.js",
                "require": "./store/dist/server.cjs"
            },
            "development": {
                "types": "./store/types/index.d.ts",
                "import": "./store/dist/dev.js",
                "require": "./store/dist/dev.cjs"
            },
            "types": "./store/types/index.d.ts",
            "import": "./store/dist/store.js",
            "require": "./store/dist/store.cjs"
        },
        "./store/dist/*": "./store/dist/*",
        "./store/types/*": "./store/types/*",
        "./web": {
            "worker": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "browser": {
                "development": {
                    "types": "./web/types/index.d.ts",
                    "import": "./web/dist/dev.js",
                    "require": "./web/dist/dev.cjs"
                },
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/web.js",
                "require": "./web/dist/web.cjs"
            },
            "deno": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "node": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/server.js",
                "require": "./web/dist/server.cjs"
            },
            "development": {
                "types": "./web/types/index.d.ts",
                "import": "./web/dist/dev.js",
                "require": "./web/dist/dev.cjs"
            },
            "types": "./web/types/index.d.ts",
            "import": "./web/dist/web.js",
            "require": "./web/dist/web.cjs"
        },
        "./web/storage": {
            "types": "./web/storage/types/index.d.ts",
            "import": "./web/storage/dist/storage.js",
            "require": "./web/storage/dist/storage.cjs"
        },
        "./web/dist/*": "./web/dist/*",
        "./web/types/*": "./web/types/*",
        "./universal": {
            "development": {
                "types": "./universal/types/index.d.ts",
                "import": "./universal/dist/dev.js",
                "require": "./universal/dist/dev.cjs"
            },
            "types": "./universal/types/index.d.ts",
            "import": "./universal/dist/universal.js",
            "require": "./universal/dist/universal.cjs"
        },
        "./universal/dist/*": "./universal/dist/*",
        "./universal/types/*": "./universal/types/*",
        "./h": {
            "types": "./h/types/index.d.ts",
            "import": "./h/dist/h.js",
            "require": "./h/dist/h.cjs"
        },
        "./h/jsx-runtime": {
            "types": "./h/jsx-runtime/types/index.d.ts",
            "import": "./h/jsx-runtime/dist/jsx.js",
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/jsx-dev-runtime": {
            "types": "./h/jsx-runtime/types/index.d.ts",
            "import": "./h/jsx-runtime/dist/jsx.js",
            "require": "./h/jsx-runtime/dist/jsx.cjs"
        },
        "./h/dist/*": "./h/dist/*",
        "./h/types/*": "./h/types/*",
        "./html": {
            "types": "./html/types/index.d.ts",
            "import": "./html/dist/html.js",
            "require": "./html/dist/html.cjs"
        },
        "./html/dist/*": "./html/dist/*",
        "./package.json": "./package.json"
    },
    "keywords": [
        "solid",
        "solidjs",
        "ui",
        "reactive",
        "components",
        "compiler",
        "performance"
    ],
    "dependencies": {
        "csstype": "^3.1.0",
        "seroval": "^1.0.3",
        "seroval-plugins": "^1.0.3"
    },
    "scripts": {
        "build": "npm-run-all -nl build:*",
        "build:clean": "rimraf dist/ coverage/ store/dist/ web/dist/ h/dist/ h/jsx-runtime/dist html/dist/",
        "build:js": "rollup -c",
        "types": "npm-run-all -nl types:*",
        "types:clean": "rimraf types/ store/types/ web/types/ h/types/ h/jsx-runtime/types html/types/",
        "types:copy": "ncp ../../node_modules/dom-expressions/src/jsx.d.ts ./src/jsx.d.ts && ncp ../../node_modules/dom-expressions/src/jsx-h.d.ts ./h/jsx-runtime/src/jsx.d.ts",
        "types:src": "tsc --project ./tsconfig.build.json && ncp ../../node_modules/dom-expressions/src/jsx.d.ts ./types/jsx.d.ts",
        "types:web": "tsc --project ./web/tsconfig.build.json",
        "types:web-storage": "tsc --project ./web/storage/tsconfig.build.json",
        "types:copy-web": "ncp ../../node_modules/dom-expressions/src/client.d.ts ./web/types/client.d.ts && ncp ../../node_modules/dom-expressions/src/server.d.ts ./web/types/server.d.ts",
        "types:store": "tsc --project ./store/tsconfig.build.json",
        "types:html": "tsc --project ./html/tsconfig.json && ncp ../../node_modules/lit-dom-expressions/types/index.d.ts ./html/types/lit.d.ts",
        "types:h": "tsc --project ./h/tsconfig.json && ncp ../../node_modules/hyper-dom-expressions/types/index.d.ts ./h/types/hyperscript.d.ts",
        "types:jsx": "rimraf ./h/jsx-runtime/types && tsc --project ./h/jsx-runtime/tsconfig.json && ncp ../../node_modules/dom-expressions/src/jsx-h.d.ts ./h/jsx-runtime/types/jsx.d.ts",
        "types:universal": "tsc --project ./universal/tsconfig.json && ncp ../../node_modules/dom-expressions/src/universal.d.ts ./universal/types/universal.d.ts",
        "bench": "node --allow-natives-syntax bench/bench.cjs",
        "link": "symlink-dir . node_modules/solid-js",
        "test": "vitest run",
        "coverage": "vitest run --coverage",
        "test-types": "tsc --project tsconfig.test.json"
    }
};

describe('createResolver', function () {
    describe('solid-js@1.6.6', function () {
        it('main', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.6.6/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_6_DOT_6, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://unpkg.com/solid-js@1.6.6/dist/server.js");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://unpkg.com/solid-js@1.6.6/web/dist/server.js");
        });
        it('types', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.6.6/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_6_DOT_6, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://unpkg.com/solid-js@1.6.6/types/index.d.ts");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://unpkg.com/solid-js@1.6.6/web/types/index.d.ts");
        });
    });
    describe('solid-js@1.7.1', function () {
        it('main', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.7.1/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_7_DOT_1, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://unpkg.com/solid-js@1.7.1/dist/server.js");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://unpkg.com/solid-js@1.7.1/web/dist/server.js");
        });
        it('types', () => {
            const pkgname = "solid-js";
            const fileName = "https://unpkg.com/solid-js@1.7.1/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_7_DOT_1, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://unpkg.com/solid-js@1.7.1/types/index.d.ts");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://unpkg.com/solid-js@1.7.1/web/types/index.d.ts");
        });
    });
    describe('solid-js@1.8.15', function () {
        it('main', () => {
            const pkgname = "solid-js";
            const fileName = "https://cdn.jsdelivr.net/npm/solid-js@1.8.15/package.json";
            const options: Options = {};
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_8_DOT_15, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://cdn.jsdelivr.net/npm/solid-js@1.8.15/dist/server.js");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://cdn.jsdelivr.net/npm/solid-js@1.8.15/web/dist/server.js");
        });
        it('types', () => {
            const pkgname = "solid-js";
            const fileName = "https://cdn.jsdelivr.net/npm/solid-js@1.8.15/package.json";
            const options: Options = { types: true };
            const resolver = createResolver(pkgname, fileName, SOLID_JS_1_DOT_8_DOT_15, options);

            const solid_js = resolver.resolve("solid-js");
            expect(solid_js).toBe("https://cdn.jsdelivr.net/npm/solid-js@1.8.15/types/index.d.ts");

            const solid_js_web = resolver.resolve("solid-js/web");
            expect(solid_js_web).toBe("https://cdn.jsdelivr.net/npm/solid-js@1.8.15/web/types/index.d.ts");
        });
    });
});
