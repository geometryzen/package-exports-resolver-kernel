export function absolute(base: string, path: string): string {
    // Append a fake current file if it does not exist in the base URL.
    const mungedBase = (base.indexOf("/") < 0) ? `${base}/file.ext` : base;
    const result = mungedBase.split("/");
    const parts = path.split("/");
    // ignore the current file name (or no string).
    result.pop();
    // ignore if "base" is the current folder without having slash in trail
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] == ".") {
            continue;
        }
        if (parts[i] == "..") {
            result.pop();
        }
        else {
            result.push(parts[i]);
        }
    }
    return result.join("/");
}
