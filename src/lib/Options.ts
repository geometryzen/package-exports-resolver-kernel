
export interface Options {
    /**
     * Determines whether "node" or "browser" will be added to the search conditions.
     * The default is "node".
     */
    browser?: string | boolean;
    /**
     * Determines whether "import" or "require" will be added to the search conditions.
     * The default is "import".
     */
    require?: boolean;
    /**
     * Allows the customization of the order of searching legacy package.json fields. 
     */
    fields?: string[];
    /**
     * Determine which properties can be traversed in the package.json "exports" property.
     */
    conditions?: string[];
    /**
     * Determines whether values are added to the search conditions corresponding to browser and require.
     * The default is to add ("node" or "browser") and ("import" or "require"). 
     */
    unsafe?: boolean;
    /**
     * Determines whether TypeScript type definitions or JavaScript modules will be resolved.
     * This is achieved by adding "types" to the list of search conditions. 
     */
    types?: boolean;
}
