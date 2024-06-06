import { formatTemperature } from "../";

describe('#utils', () => {
    describe('when formatting a temperauture', () => {
        it("returns the temperature with notation", () => {
            expect(formatTemperature(20)).toBe("20°")
        })
    })
})