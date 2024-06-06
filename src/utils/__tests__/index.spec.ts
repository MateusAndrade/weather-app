import { formatTemperature, isTimeInAboveRange, getForecastsFromTime } from "../";

import * as mocks from "./mocks"

describe('#utils', () => {
    describe('#formatTemperature', () => {
        it("returns the temperature with notation", () => {
            expect(formatTemperature(20)).toBe("20°")
        })
    })

    describe('#isTimeInAboveRange', () => {
        it("returns  true if a given time is in range", () => {
            expect(isTimeInAboveRange(20, 21)).toBe(false)
        })

        it("returns  false if a given time is not in range", () => {
            expect(isTimeInAboveRange(22, 21)).toBe(true)
        })
    })

    describe('#getForecastsFromTime', () => {
        it("returns  a list with 24 entries when getting forecasts from 00:00", () => {
            expect(getForecastsFromTime(0, mocks.forecasts).length).toBe(24)
        })

        it("returns 10:00 as the first entry from a list of forecasts", () => {
            const [forecast] = getForecastsFromTime(10, mocks.forecasts)

            expect(forecast.time).toBe("2024-06-06 10:00")
        })
    })
})