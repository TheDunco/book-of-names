const screenNumbers = {
    '2xs': 320,
    xs: 375,
    sm: 640,
    md: 768,
    lg: 991,
    xl: 1200,
    '2xl': 1400,
};

const screens = Object.keys(screenNumbers).reduce((acc, key) => {
    acc[key] = `${screenNumbers[key]}px`;
    return acc;
}, {});

module.exports = {
    screens,
    screenNumbers,
};