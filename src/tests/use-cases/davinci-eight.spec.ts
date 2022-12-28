import { createResolver, Options, Package } from '../../index.js';

const DAVINCI_EIGHT: Package = {
    "name": "davinci-eight",
    "version": "8.4.47",
    "exports": {
        ".": {
            "types": "./dist/index.d.ts",
            "system": "./dist/system/index.js",
            "import": "./dist/esm/index.js"
        }
    },
    "browser": "./dist/umd/index.js",
    "module": "./dist/esm/index.js",
    "types": "./dist/index.d.ts"
};

describe('createResolver', function () {
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
        it('system', () => {
            const pkgname = "davinci-eight";
            const fileName = "https://unpkg.com/davinci-eight@8.4.47/package.json";
            const options: Options = { conditions: ["system"] };
            const resolver = createResolver(pkgname, fileName, DAVINCI_EIGHT, options);
            const out = resolver.resolve("davinci-eight");
            expect(out).toBe("https://unpkg.com/davinci-eight@8.4.47/dist/system/index.js");
        });
    });
});
