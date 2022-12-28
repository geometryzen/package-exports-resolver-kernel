import { isMapLike } from "../../lib/isMapLike";

describe('isMapLike', function () {
    it('{}', function () {
        expect(isMapLike({})).toBe(true);
    });
    it('[]', function () {
        expect(isMapLike([])).toBe(false);
    });
    it('null', function () {
        expect(isMapLike(null)).toBe(false);
    });
    it('string', function () {
        expect(isMapLike("foo")).toBe(false);
    });
});