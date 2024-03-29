import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { InputPluginOption, RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: 'json' };

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/**
 * ${pkg.name} ${pkg.version}
 * (c) ${pkg.author}
 * Released under the ${pkg.license} License.
 */
`.trim();

const options: RollupOptions[] = [
    {
        input: 'src/index.ts',
        output: [
            {
                banner,
                file: './dist/umd/index.js',
                format: 'umd',
                sourcemap: true,
                name: "MYLIB",
            },
            {
                banner,
                file: './dist/umd/index.min.js',
                format: 'umd',
                sourcemap: true,
                name: "MYLIB",
                plugins: [terser()]
            },
            {
                banner,
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
                name: 'MYLIB'
            },
            {
                banner,
                file: './dist/esm/index.js',
                format: 'esm',
                sourcemap: true
            },
            {
                banner,
                file: './dist/esm/index.min.js',
                format: 'esm',
                sourcemap: true,
                plugins: [terser()]
            },
            {
                banner,
                file: './dist/system/index.js',
                format: 'system',
                sourcemap: true
            },
            {
                banner,
                file: './dist/system/index.min.js',
                format: 'system',
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [
            peerDepsExternal() as unknown as InputPluginOption,
            // Allows us to consume the 'big-integer' library, which is CommonJS :(
            commonjs(),
            resolve(),
            typescript({ tsconfig: './tsconfig.json' })
        ]
    },
    {
        input: 'dist/esm/types/src/index.d.ts',
        output: [{ file: pkg.types, format: "esm" }],
        plugins: [dts()],
    }
];

export default options;