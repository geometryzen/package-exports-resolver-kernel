import { legacy, Package } from '../index.js';

describe('legacy-types', function () {
    it('types', function () {
        const pkg: Package = {
            "name": "foobar",
            "module": "build/module.js",
            "main": "build/main.js",
            "types": "build/index.d.ts"
        };
        const output = legacy('foobar', pkg, { types: true });
        expect(output).toBe('./build/index.d.ts');
    });
    it('typings', function () {
        const pkg: Package = {
            "name": "foobar",
            "module": "build/module.js",
            "main": "build/main.js",
            "typings": "build/index.d.ts"
        };
        const output = legacy('foobar', pkg, { types: true });
        expect(output).toBe('./build/index.d.ts');
    });
    it('missing', function () {
        const pkg: Package = {
            "name": "foobar",
            "module": "build/module.js",
            "main": "build/main.js"
        };
        const output = legacy('foobar', pkg, { types: true });
        expect(output).toBeUndefined();
    });
});
