const breakpoints = {
    width: {
        xxxs: 320,
        xxs: 360,
        xs: 375,
        s: 414,
        m: 768,
        l: 1024,
        xl: 1366,
        xxl: 1440,
        xxxl: 1536,
        xxxxl: 1920,
    },
    height: {
        xxxs: 640,
        xxs: 667,
        xs: 736,
        s: 812,
        m: 864,
        l: 896,
        xl: 900,
        xxl: 926,
        xxxl: 962,
        xxxxl: 1080,
    },
}

const mediaQueries = {
    xxsUp: `@media only screen and (min-width: ${breakpoints.width.xxs}px)`,
    xxsUpH: `@media only screen and (min-width: ${breakpoints.width.xxs}px) and (min-height: 540px)`,
    xsUp: `@media only screen and (min-width: ${breakpoints.width.xs}px)`,
    xsUpH: `@media only screen and (min-width: ${breakpoints.width.xs}px) and (min-height: 600px)`,
    sUp: `@media only screen and (min-width: ${breakpoints.width.s}px)`,
    sUpM: `@media only screen and (min-width: 600px)`,
    mUp: `@media only screen and (min-width: ${breakpoints.width.m}px)`,
    lUp: `@media only screen and (min-width: ${breakpoints.width.l}px)`,
    xlUp: `@media only screen and (min-width: ${breakpoints.width.xl}px)`,
    xxlUp: `@media only screen and (min-width: ${breakpoints.width.xxl}px)`,
    xxxlUp: `@media only screen and (min-width: ${breakpoints.width.xxxl}px)`,
    xxxxlUp: `@media only screen and (min-width: ${breakpoints.width.xxxxl}px)`,

    xxs: `@media only screen and (max-width: ${breakpoints.width.xxs}px)`,
    s: `@media only screen and (max-width: ${breakpoints.width.s}px)`,
    m: `@media only screen and (max-width: ${breakpoints.width.m}px)`,
}

export default mediaQueries
