
/**
 * Converts the entry into a path that is relative to the root module name (package name).
 * @param rootModuleName the package name (root module name)
 * @param moduleName the target path/import
 */
export function toName(rootModuleName: string, moduleName: string): string {
    // return entry === name ? '.' : entry[0] === '.' ? entry : entry.replace(new RegExp('^' + name + '/'), './');
    if (moduleName === rootModuleName) {
        // We are looking for the root module.
        return '.';
    }
    else if (moduleName[0] === '.') {
        // It's already relative (and begins with either "./" or "../" or is ".").
        // Let's check our hunch.
        // The tests all run OK.
        if (moduleName === "." || moduleName.startsWith("./") || moduleName.startsWith("../")) {
            return moduleName;
        }
        else {
            throw new Error(`entry is ${JSON.stringify(moduleName)}`);
        }
    }
    else {
        // Replace rootModuleName/foo/bar with ./foo/bar etc.
        // However, if the entry does not begin with the rootModuleName it is untouched.
        return moduleName.replace(new RegExp('^' + rootModuleName + '/'), './');
    }
}
