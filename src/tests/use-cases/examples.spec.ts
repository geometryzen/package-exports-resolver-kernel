import { legacy, Package, resolve } from '../../index.js';

const pkg: Package = {
    "name": "foobar",
    "module": "dist/module.mjs",
    "main": "dist/require.js",
    "exports": {
        ".": {
            "import": "./dist/module.mjs",
            "require": "./dist/require.js"
        },
        "./lite": {
            "worker": {
                "browser": "./lite/worker.browser.js",
                "node": "./lite/worker.node.js"
            },
            "import": "./lite/module.mjs",
            "require": "./lite/require.js"
        }
    }
};

describe('examples', function () {

    describe('resolve', function () {
        it('', function () {
            expect(resolve('foobar', pkg)).toBe("./dist/module.mjs");
        });
        it('root module', function () {
            expect(resolve('foobar', pkg, 'foobar')).toBe("./dist/module.mjs");
            expect(resolve('foobar', pkg, '.')).toBe("./dist/module.mjs");
        });
        it('sub module', function () {
            expect(resolve('foobar', pkg, 'foobar/lite')).toBe("./lite/module.mjs");
            expect(resolve('foobar', pkg, './lite')).toBe("./lite/module.mjs");
        });
        it('require', function () {
            expect(resolve('foobar', pkg, 'foobar/lite', { require: true })).toBe("./lite/require.js");
            expect(resolve('foobar', pkg, './lite', { require: true })).toBe("./lite/require.js");
        });
        it('custom condition', function () {
            expect(resolve('foobar', pkg, 'foobar/lite', { conditions: ['worker'] })).toBe("./lite/worker.node.js");
        });
        it('browser condition', function () {
            expect(resolve('foobar', pkg, 'foobar/lite', { conditions: ['worker'], browser: true })).toBe("./lite/worker.browser.js");
        });
        it('unresolved I', function () {
            expect(function () {
                resolve('foobar', pkg, 'foobar/hello');
            }).toThrow('Missing "./hello" export in "foobar" package');
        });
        it('unresolved II', function () {
            expect(function () {
                resolve('foobar', pkg, './hello/world');
            }).toThrow('Missing "./hello/world" export in "foobar" package');
        });
    });

    describe('legacy', function () {
        it('prefer module > main (default)', function () {
            expect(legacy('foobar', pkg)).toBe("./dist/module.mjs");
        });
        it('customize fields order', function () {
            expect(legacy('foobar', pkg, { fields: ['main', 'module'] })).toBe("./dist/require.js");
        });
    });
});
