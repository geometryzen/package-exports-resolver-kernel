import { Options, Package, resolve } from '../../index.js';
import { isMapLike } from '../../lib/isMapLike.js';

function pass(pkgname: string, pkg: Package, expects: unknown, moduleName?: string, options?: Options): void {
    const out = resolve(pkgname, pkg, moduleName, options);
    expect(out).toBe(expects);
}

function fail(pkgname: string, pkg: Package, target: string, moduleName?: string, options?: Options): void {
    try {
        resolve(pkgname, pkg, moduleName, options);
        expect(false).toBe(true);
    }
    catch (err) {
        if (err instanceof Error) {
            expect(err.message).toBe(`Missing "${target}" export in "${pkg.name}" package`);
        }
        else {
            expect(err).toBeInstanceOf(Error);
        }
    }
}

describe('resolve', function () {
    describe('core', function () {

        it('should be a function', () => {
            expect(typeof resolve).toBe('function');
        });

        it('exports=string', () => {
            const pkg: Package = {
                "name": "foobar",
                "exports": "$string",
            };

            pass('foobar', pkg, '$string');
            pass('foobar', pkg, '$string', '.');
            pass('foobar', pkg, '$string', 'foobar');

            fail('foobar', pkg, './other', 'other');
            fail('foobar', pkg, './other', 'foobar/other');
            fail('foobar', pkg, './hello', './hello');
        });

        it('exports = { self }', () => {
            const pkg: Package = {
                "name": "foobar",
                "exports": {
                    "import": "$import",
                    "require": "$require",
                }
            };

            pass('foobar', pkg, '$import');
            pass('foobar', pkg, '$import', '.');
            pass('foobar', pkg, '$import', 'foobar');

            fail('foobar', pkg, './other', 'other');
            fail('foobar', pkg, './other', 'foobar/other');
            fail('foobar', pkg, './hello', './hello');
        });

        it('exports["."] = string', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    ".": "$self",
                }
            };

            pass('foobar', pkg, '$self');
            pass('foobar', pkg, '$self', '.');
            pass('foobar', pkg, '$self', 'foobar');

            fail('foobar', pkg, './other', 'other');
            fail('foobar', pkg, './other', 'foobar/other');
            fail('foobar', pkg, './hello', './hello');
        });

        it('exports["."] = object', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    ".": {
                        "import": "$import",
                        "require": "$require",
                    }
                }
            };

            pass('foobar', pkg, '$import');
            pass('foobar', pkg, '$import', '.');
            pass('foobar', pkg, '$import', 'foobar');

            fail('foobar', pkg, './other', 'other');
            fail('foobar', pkg, './other', 'foobar/other');
            fail('foobar', pkg, './hello', './hello');
        });

        it('exports["./foo"] = string', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./foo": "$import",
                }
            };

            pass('foobar', pkg, '$import', './foo');
            pass('foobar', pkg, '$import', 'foobar/foo');

            fail('foobar', pkg, '.');
            fail('foobar', pkg, '.', 'foobar');
            fail('foobar', pkg, './other', 'foobar/other');
        });

        it('exports["./foo"] = object', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./foo": {
                        "import": "$import",
                        "require": "$require",
                    }
                }
            };

            pass('foobar', pkg, '$import', './foo');
            pass('foobar', pkg, '$import', 'foobar/foo');

            fail('foobar', pkg, '.');
            fail('foobar', pkg, '.', 'foobar');
            fail('foobar', pkg, './other', 'foobar/other');
        });

        // https://nodejs.org/api/packages.html#packages_nested_conditions
        it('nested conditions', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "node": {
                        "import": "$node.import",
                        "require": "$node.require"
                    },
                    "default": "$default",
                }
            };

            pass('foobar', pkg, '$node.import');
            pass('foobar', pkg, '$node.import', 'foobar');

            // browser => no "node" key
            pass('foobar', pkg, '$default', '.', { browser: true });
            pass('foobar', pkg, '$default', 'foobar', { browser: true });

            fail('foobar', pkg, './hello', './hello');
            fail('foobar', pkg, './other', 'foobar/other');
            fail('foobar', pkg, './other', 'other');
        });

        it('nested conditions :: subpath', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./lite": {
                        "node": {
                            "import": "$node.import",
                            "require": "$node.require"
                        },
                        "browser": {
                            "import": "$browser.import",
                            "require": "$browser.require"
                        },
                    }
                }
            };

            pass('foobar', pkg, '$node.import', 'foobar/lite');
            pass('foobar', pkg, '$node.require', 'foobar/lite', { require: true });

            pass('foobar', pkg, '$browser.import', 'foobar/lite', { browser: true });
            pass('foobar', pkg, '$browser.require', 'foobar/lite', { browser: true, require: true });
        });

        it('nested conditions :: subpath :: inverse', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./lite": {
                        "import": {
                            "browser": "$browser.import",
                            "node": "$node.import",
                        },
                        "require": {
                            "browser": "$browser.require",
                            "node": "$node.require",
                        }
                    }
                }
            };

            pass('foobar', pkg, '$node.import', 'foobar/lite');
            pass('foobar', pkg, '$node.require', 'foobar/lite', { require: true });

            pass('foobar', pkg, '$browser.import', 'foobar/lite', { browser: true });
            pass('foobar', pkg, '$browser.require', 'foobar/lite', { browser: true, require: true });
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./"]', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    ".": {
                        "require": "$require",
                        "import": "$import"
                    },
                    "./package.json": "./package.json",
                    "./": "./"
                }
            };

            pass('foobar', pkg, '$import');
            pass('foobar', pkg, '$import', 'foobar');
            pass('foobar', pkg, '$require', 'foobar', { require: true });

            pass('foobar', pkg, './package.json', 'package.json');
            pass('foobar', pkg, './package.json', 'foobar/package.json');
            pass('foobar', pkg, './package.json', './package.json');

            // "loose" / everything exposed
            pass('foobar', pkg, './hello.js', 'hello.js');
            pass('foobar', pkg, './hello.js', 'foobar/hello.js');
            pass('foobar', pkg, './hello/world.js', './hello/world.js');
        });

        it('exports["./"] :: w/o "." key', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./package.json": "./package.json",
                    "./": "./"
                }
            };

            fail('foobar', pkg, '.', ".");
            fail('foobar', pkg, '.', "foobar");

            pass('foobar', pkg, './package.json', 'package.json');
            pass('foobar', pkg, './package.json', 'foobar/package.json');
            pass('foobar', pkg, './package.json', './package.json');

            // "loose" / everything exposed
            pass('foobar', pkg, './hello.js', 'hello.js');
            pass('foobar', pkg, './hello.js', 'foobar/hello.js');
            pass('foobar', pkg, './hello/world.js', './hello/world.js');
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./*"]', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./*": "./cheese/*.mjs"
                }
            };

            fail('foobar', pkg, '.', ".");
            fail('foobar', pkg, '.', "foobar");

            pass('foobar', pkg, './cheese/hello.mjs', 'hello');
            pass('foobar', pkg, './cheese/hello.mjs', 'foobar/hello');
            pass('foobar', pkg, './cheese/hello/world.mjs', './hello/world');

            // evaluate as defined, not wrong
            pass('foobar', pkg, './cheese/hello.js.mjs', 'hello.js');
            pass('foobar', pkg, './cheese/hello.js.mjs', 'foobar/hello.js');
            pass('foobar', pkg, './cheese/hello/world.js.mjs', './hello/world.js');
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./features/"]', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/": "./features/"
                }
            };

            pass('foobar', pkg, './features/', 'features/');
            pass('foobar', pkg, './features/', 'foobar/features/');

            pass('foobar', pkg, './features/hello.js', 'foobar/features/hello.js');

            fail('foobar', pkg, './features', 'features');
            fail('foobar', pkg, './features', 'foobar/features');

            fail('foobar', pkg, './package.json', 'package.json');
            fail('foobar', pkg, './package.json', 'foobar/package.json');
            fail('foobar', pkg, './package.json', './package.json');
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./features/"] :: with "./" key', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/": "./features/",
                    "./package.json": "./package.json",
                    "./": "./"
                }
            };

            pass('foobar', pkg, './features', 'features'); // via "./"
            pass('foobar', pkg, './features', 'foobar/features'); // via "./"

            pass('foobar', pkg, './features/', 'features/'); // via "./features/"
            pass('foobar', pkg, './features/', 'foobar/features/'); // via "./features/"

            pass('foobar', pkg, './features/hello.js', 'foobar/features/hello.js');

            pass('foobar', pkg, './package.json', 'package.json');
            pass('foobar', pkg, './package.json', 'foobar/package.json');
            pass('foobar', pkg, './package.json', './package.json');

            // Does NOT hit "./" (match Node)
            fail('foobar', pkg, '.', '.');
            fail('foobar', pkg, '.', 'foobar');
        });

        it('exports["./features/"] :: conditions', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/": {
                        "browser": {
                            "import": "./browser.import/",
                            "require": "./browser.require/",
                        },
                        "import": "./import/",
                        "require": "./require/",
                    },
                }
            };

            // import
            pass('foobar', pkg, './import/', 'features/');
            pass('foobar', pkg, './import/', 'foobar/features/');

            pass('foobar', pkg, './import/hello.js', './features/hello.js');
            pass('foobar', pkg, './import/hello.js', 'foobar/features/hello.js');

            // require
            pass('foobar', pkg, './require/', 'features/', { require: true });
            pass('foobar', pkg, './require/', 'foobar/features/', { require: true });

            pass('foobar', pkg, './require/hello.js', './features/hello.js', { require: true });
            pass('foobar', pkg, './require/hello.js', 'foobar/features/hello.js', { require: true });

            // require + browser
            pass('foobar', pkg, './browser.require/', 'features/', { browser: true, require: true });
            pass('foobar', pkg, './browser.require/', 'foobar/features/', { browser: true, require: true });

            pass('foobar', pkg, './browser.require/hello.js', './features/hello.js', { browser: true, require: true });
            pass('foobar', pkg, './browser.require/hello.js', 'foobar/features/hello.js', { browser: true, require: true });
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./features/*"]', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/*": "./features/*.js",
                }
            };

            fail('foobar', pkg, './features', 'features');
            fail('foobar', pkg, './features', 'foobar/features');

            fail('foobar', pkg, './features/', 'features/');
            fail('foobar', pkg, './features/', 'foobar/features/');

            pass('foobar', pkg, './features/a.js', 'foobar/features/a');
            pass('foobar', pkg, './features/ab.js', 'foobar/features/ab');
            pass('foobar', pkg, './features/abc.js', 'foobar/features/abc');

            pass('foobar', pkg, './features/hello.js', 'foobar/features/hello');
            pass('foobar', pkg, './features/world.js', 'foobar/features/world');

            // incorrect, but matches Node. evaluate as defined
            pass('foobar', pkg, './features/hello.js.js', 'foobar/features/hello.js');
            pass('foobar', pkg, './features/world.js.js', 'foobar/features/world.js');

            fail('foobar', pkg, './package.json', 'package.json');
            fail('foobar', pkg, './package.json', 'foobar/package.json');
            fail('foobar', pkg, './package.json', './package.json');
        });

        // https://nodejs.org/api/packages.html#packages_subpath_folder_mappings
        it('exports["./features/*"] :: with "./" key', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/*": "./features/*.js",
                    "./": "./"
                }
            };

            pass('foobar', pkg, './features', 'features'); // via "./"
            pass('foobar', pkg, './features', 'foobar/features'); // via "./"

            pass('foobar', pkg, './features/', 'features/'); // via "./"
            pass('foobar', pkg, './features/', 'foobar/features/'); // via "./"

            pass('foobar', pkg, './features/hello.js', 'foobar/features/hello');
            pass('foobar', pkg, './features/world.js', 'foobar/features/world');

            // incorrect, but matches Node. evaluate as defined
            pass('foobar', pkg, './features/hello.js.js', 'foobar/features/hello.js');
            pass('foobar', pkg, './features/world.js.js', 'foobar/features/world.js');

            pass('foobar', pkg, './package.json', 'package.json');
            pass('foobar', pkg, './package.json', 'foobar/package.json');
            pass('foobar', pkg, './package.json', './package.json');

            // Does NOT hit "./" (match Node)
            fail('foobar', pkg, '.', '.');
            fail('foobar', pkg, '.', 'foobar');
        });

        it('exports["./features/*"] :: conditions', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    "./features/*": {
                        "browser": {
                            "import": "./browser.import/*.mjs",
                            "require": "./browser.require/*.js",
                        },
                        "import": "./import/*.mjs",
                        "require": "./require/*.js",
                    },
                }
            };

            // import
            fail('foobar', pkg, './features/', 'features/'); // no file
            fail('foobar', pkg, './features/', 'foobar/features/'); // no file

            pass('foobar', pkg, './import/hello.mjs', './features/hello');
            pass('foobar', pkg, './import/hello.mjs', 'foobar/features/hello');

            // require
            fail('foobar', pkg, './features/', 'features/', { require: true }); // no file
            fail('foobar', pkg, './features/', 'foobar/features/', { require: true }); // no file

            pass('foobar', pkg, './require/hello.js', './features/hello', { require: true });
            pass('foobar', pkg, './require/hello.js', 'foobar/features/hello', { require: true });

            // require + browser
            fail('foobar', pkg, './features/', 'features/', { browser: true, require: true }); // no file
            fail('foobar', pkg, './features/', 'foobar/features/', { browser: true, require: true }); // no file

            pass('foobar', pkg, './browser.require/hello.js', './features/hello', { browser: true, require: true });
            pass('foobar', pkg, './browser.require/hello.js', 'foobar/features/hello', { browser: true, require: true });
        });

        it('should handle mixed path/conditions', () => {
            const pkg = {
                "name": "foobar",
                "exports": {
                    ".": [
                        {
                            "import": "$root.import",
                        },
                        "$root.string"
                    ],
                    "./foo": [
                        {
                            "require": "$foo.require"
                        },
                        "$foo.string"
                    ]
                }
            };

            pass('foobar', pkg, '$root.import');
            pass('foobar', pkg, '$root.import', 'foobar');

            pass('foobar', pkg, '$foo.string', 'foo');
            pass('foobar', pkg, '$foo.string', 'foobar/foo');
            pass('foobar', pkg, '$foo.string', './foo');

            pass('foobar', pkg, '$foo.require', 'foo', { require: true });
            pass('foobar', pkg, '$foo.require', 'foobar/foo', { require: true });
            pass('foobar', pkg, '$foo.require', './foo', { require: true });
        });
    });
    describe('requires', function () {
        const pkg: Package = {
            "exports": {
                "require": "$require",
                "import": "$import",
            }
        };

        it('should ignore "require" keys by default', function () {
            pass('foobar', pkg, '$import');
        });

        it('should use "require" key when defined first', function () {
            pass('foobar', pkg, '$require', '.', { require: true });
        });

        it('should ignore "import" key when enabled', () => {
            const pkg = {
                "exports": {
                    "import": "$import",
                    "require": "$require",
                }
            };
            pass('foobar', pkg, '$require', '.', { require: true });
            pass('foobar', pkg, '$import', '.');
        });

        it('should match "default" if "require" is after', () => {
            const pkg = {
                "exports": {
                    "default": "$default",
                    "require": "$require",
                }
            };
            pass('foobar', pkg, '$default', '.', { require: true });
        });
    });
    describe('browser', function () {
        const pkg: Package = {
            "exports": {
                "browser": "$browser",
                "node": "$node",
            }
        };

        it('should ignore "browser" keys by default', function () {
            pass('foobar', pkg, '$node');
        });

        it('should use "browser" key when defined first', function () {
            pass('foobar', pkg, '$browser', '.', { browser: true });
        });

        it('should ignore "node" key when enabled', () => {
            const pkg = {
                "exports": {
                    "node": "$node",
                    "import": "$import",
                    "browser": "$browser",
                }
            };
            // import defined before browser
            pass('foobar', pkg, '$import', '.', { browser: true });
        });
    });
    describe('conditions', function () {
        const pkg: Package = {
            "exports": {
                "production": "$prod",
                "development": "$dev",
                "default": "$default",
            }
        };

        it('should ignore unknown conditions by default', function () {
            pass('foobar', pkg, '$default');
        });

        it('should recognize custom field(s) when specified', function () {
            pass('foobar', pkg, '$dev', '.', {
                conditions: ['development']
            });

            pass('foobar', pkg, '$prod', '.', {
                conditions: ['development', 'production']
            });
        });

        it('should throw an error if no known conditions', function () {
            const p = {
                "name": "hello",
                "exports": {
                    ...(pkg.exports as object)
                },
            };

            if (isMapLike(p.exports)) {
                delete p.exports['default'];
            }

            try {
                resolve('hello', p);
                expect(false).toBe(true);
            }
            catch (err) {
                if (err instanceof Error) {
                    expect(err.message).toBe(`No known conditions for "." entry in "hello" package`);
                }
                else {
                    expect(err).toBeInstanceOf(Error);
                }
            }
        });
    });
    describe('unsafe', function () {
        const pkg: Package = {
            "exports": {
                ".": {
                    "production": "$prod",
                    "development": "$dev",
                    "default": "$default",
                },
                "./spec/type": {
                    "import": "$import",
                    "require": "$require",
                    "default": "$default"
                },
                "./spec/env": {
                    "worker": {
                        "default": "$worker"
                    },
                    "browser": "$browser",
                    "node": "$node",
                    "default": "$default"
                }
            }
        };

        it('should ignore unknown conditions by default', function () {
            pass('foobar', pkg, '$default', '.', {
                unsafe: true,
            });
        });

        it('should ignore "import" and "require" conditions by default', function () {
            pass('foobar', pkg, '$default', './spec/type', {
                unsafe: true,
            });

            pass('foobar', pkg, '$default', './spec/type', {
                unsafe: true,
                require: true,
            });
        });

        it('should ignore "node" and "browser" conditions by default', function () {
            pass('foobar', pkg, '$default', './spec/type', {
                unsafe: true,
            });

            pass('foobar', pkg, '$default', './spec/type', {
                unsafe: true,
                browser: true,
            });
        });

        it('should respect/accept any custom condition(s) when specified', function () {
            // root, dev only
            pass('foobar', pkg, '$dev', '.', {
                unsafe: true,
                conditions: ['development']
            });

            // root, defined order
            pass('foobar', pkg, '$prod', '.', {
                unsafe: true,
                conditions: ['development', 'production']
            });

            // import vs require, defined order
            pass('foobar', pkg, '$require', './spec/type', {
                unsafe: true,
                conditions: ['require']
            });

            // import vs require, defined order
            pass('foobar', pkg, '$import', './spec/type', {
                unsafe: true,
                conditions: ['import', 'require']
            });

            // import vs require, defined order
            pass('foobar', pkg, '$node', './spec/env', {
                unsafe: true,
                conditions: ['node']
            });

            // import vs require, defined order
            pass('foobar', pkg, '$browser', './spec/env', {
                unsafe: true,
                conditions: ['browser', 'node']
            });

            // import vs require, defined order
            pass('foobar', pkg, '$worker', './spec/env', {
                unsafe: true,
                conditions: ['browser', 'node', 'worker']
            });
        });
    });
});
