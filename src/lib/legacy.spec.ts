import { legacy, Package } from '../index.js';

describe('legacy', function () {
    describe('core', function () {
        it('should be a function', function () {
            expect(typeof legacy).toBe('function');
        });

        it('should prefer "module" > "main" entry', function () {
            const pkg: Package = {
                "name": "foobar",
                "module": "build/module.js",
                "main": "build/main.js",
            };

            const output = legacy('foobar', pkg);
            expect(output).toBe('./build/module.js');
        });

        it('should read "main" field', function () {
            const pkg: Package = {
                "name": "foobar",
                "main": "build/main.js",
            };

            const output = legacy('foobar', pkg);
            expect(output).toBe('./build/main.js');
        });

        it('should return nothing when no fields', function () {
            const pkg: Package = {
                "name": "foobar"
            };

            const output = legacy('foobar', pkg);
            expect(output).toBeUndefined();
        });

        it('should ignore boolean-type field values', function () {
            const pkg: Package = {
                "module": true as unknown as string,
                "main": "main.js"
            };

            const output = legacy('foobar', pkg);
            expect(output).toBe('./main.js');
        });
    });
    describe('fields', function () {
        const pkg: Package = {
            "name": "foobar",
            "module": "build/module.js",
            "browser": "build/browser.js",
            "custom": "build/custom.js",
            "main": "build/main.js",
        };
        it('should customize field search order', function () {
            let output = legacy('foobar', pkg);
            expect(output).toBe('./build/module.js'); // default: module;

            output = legacy('foobar', pkg, { fields: ['main'] });
            expect(output).toBe('./build/main.js'); // custom: main only;

            output = legacy('foobar', pkg, { fields: ['custom', 'main', 'module'] });
            expect(output).toBe('./build/custom.js');// custom: custom > main > module';
        });
        it('should return first *resolved* field', function () {
            const output = legacy('foobar', pkg, {
                fields: ['howdy', 'partner', 'hello', 'world', 'main']
            });

            expect(output).toBe('./build/main.js');
        });
    });
    describe('browser', function () {
        const pkg: Package = {
            "name": "foobar",
            "module": "build/module.js",
            "browser": "build/browser.js",
            "unpkg": "build/unpkg.js",
            "main": "build/main.js",
        };

        it('should prioritize "browser" field when defined', function () {
            let output = legacy('foobar', pkg);
            expect(output).toBe('./build/module.js');

            output = legacy('foobar', pkg, { browser: true });
            expect(output).toBe('./build/browser.js');
        });

        it('should respect existing "browser" order in custom fields', function () {
            const output = legacy('foobar', pkg, {
                fields: ['main', 'browser'],
                browser: true,
            });

            expect(output).toBe('./build/main.js');
        });

        // https://github.com/defunctzombie/package-browser-field-spec
        it('should resolve object format', function () {
            const pkg: Package = {
                "name": "foobar",
                "browser": {
                    "module-a": "./shims/module-a.js",
                    "./server/only.js": "./shims/client-only.js"
                }
            };

            expect(legacy('foobar', pkg, { browser: 'module-a' })).toBe('./shims/module-a.js');

            expect(legacy('foobar', pkg, { browser: './server/only.js' })).toBe('./shims/client-only.js');

            expect(legacy('foobar', pkg, { browser: 'foobar/server/only.js' })).toBe('./shims/client-only.js');
        });

        it('should allow object format to "ignore" modules/files :: string', function () {
            const pkg: Package = {
                "name": "foobar",
                "browser": {
                    "module-a": false,
                    "./foo.js": false,
                }
            };

            expect(legacy('foobar', pkg, { browser: 'module-a' })).toBe(false);

            expect(legacy('foobar', pkg, { browser: './foo.js' })).toBe(false);

            expect(legacy('foobar', pkg, { browser: 'foobar/foo.js' })).toBe(false);
        });

        it('should return the `browser` string (entry) if no custom mapping :: string', function () {
            const pkg = {
                "name": "foobar",
                "browser": {
                    //
                }
            };

            expect(
                legacy('foobar', pkg, { browser: './hello.js' })).toBe('./hello.js');

            expect(
                legacy('foobar', pkg, { browser: 'foobar/hello.js' })).toBe('./hello.js');
        });

        it('should return the full "browser" object :: true', function () {
            const pkg: Package = {
                "name": "foobar",
                "browser": {
                    "./other.js": "./world.js"
                }
            };

            const output = legacy('foobar', pkg, {
                browser: true
            });

            expect(output).toBe(pkg.browser);
        });

        it('still ensures string output is made relative', function () {
            const pkg: Package = {
                "name": "foobar",
                "browser": {
                    "./foo.js": 'bar.js',
                }
            };

            expect(legacy('foobar', pkg, { browser: './foo.js' })).toBe('./bar.js');

            expect(legacy('foobar', pkg, { browser: 'foobar/foo.js' })).toBe('./bar.js');
        });
    });
});
