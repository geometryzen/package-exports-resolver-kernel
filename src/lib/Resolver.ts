
export interface Resolver {
    resolve(moduleName: string): string | undefined;
}
