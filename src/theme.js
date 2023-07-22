const common = {
  breakpoint: {
    medium: 768,
    large: 1200,
  },
  shadow: {
    thin: `0px -2px 14px rgba(9, 10, 51, 0.02),
    0px 4px 16px rgba(9, 10, 51, 0.03)`,
    thick: `0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03)`,
  },
  white: "#FFFFFF",
  black: "#000000",
  mineShaft: "#252525",
  animation: "0.3s",
  themeAnimation: "0.5s 0.25s",
  switchAnimation: "0.6s cubic-bezier(0.66, -0.60, 0.66, 0.90) 0s",
};

const color = {
  white: "#FFFFFF",
  black: "#000000",
  transculentWhite: "#FFFFFF40",
  transparentWhite: "#FFFFFF10",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  semiTransparentMineShaft: "#363636B8",
  transparentMineShaft: "#36363630",
  slateGray: "#6E7E91",
  semiTransparentIron: "#D1D5DA4D",
  semiTransparentLighterIron: "#D1D5DA1A",
  scienceBlue: "#0366D6",
  semiTransparentScienceBlue: "#0366D633",
  semiTransparentDarkerScienceBlue: "#0366D680",
  vividTangerine: "#ff5050",
  anakiwa: "#8CC2FF",
  parsley: "#14462033",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  mercury: "#E5E5E5",
  transparent: "transparent",
};

const brightness = {
  light: "brightness(1)",
  dark: "brightness(0.85)",
};

const transform = {
  left: "translateX(0)",
  right: "translateX(100%)",
};

const opacity = {
  visible: 1,
  invisible: 0,
};

export const dark = {
  ...common,
  contrast: color.white,
  primary: color.dodgerBlue,
  alternative: color.scienceBlue,
  textPrimary: color.white,
  textAlternative: color.white,
  background: color.mineShaft,
  border: color.semiTransparentMineShaft,
  underline: color.semiTransparentLighterIron,
  indicator: color.semiTransparentDarkerScienceBlue,
  brightness: brightness.dark,
  tile: {
    background: color.semiTransparentMineShaft,
    border: color.semiTransparentLighterIron,
    hover: color.semiTransparentDarkerScienceBlue,
    error: color.vividTangerine,
  },
  button: {
    text: color.white,
    background: color.dodgerBlue,
    border: color.semiTransparentIron,
    hover: color.shipCove,
    active: color.parsley,
  },
  link: {
    text: color.dodgerBlue,
    underline: color.semiTransparentIron,
    hover: color.scienceBlue,
    underlineHover: color.dodgerBlue,
    active: color.parsley,
  },
  icon: {
    background: color.white,
    hover: color.dodgerBlue,
  },
  switch: {
    background: color.semiTransparentMineShaft,
    border: color.white,
    switcher: color.white,
    translate: transform.right,
    icon: color.mineShaft,
    textModeOff: opacity.invisible,
    textModeOn: opacity.visible,
  },
  card: {
    front: color.transparentWhite,
    back: color.transculentWhite,
  },
};

export const light = {
  ...common,
  contrast: color.black,
  primary: color.scienceBlue,
  alternative: color.dodgerBlue,
  textPrimary: color.mineShaft,
  textAlternative: color.slateGray,
  background: color.whiteLilac,
  border: color.semiTransparentIron,
  underline: color.semiTransparentIron,
  indicator: color.semiTransparentScienceBlue,
  brightness: brightness.light,
  tile: {
    background: color.white,
    border: color.semiTransparentIron,
    hover: color.semiTransparentScienceBlue,
    error: color.vividTangerine,
  },
  button: {
    text: color.white,
    background: color.scienceBlue,
    border: color.semiTransparentIron,
    hover: color.anakiwa,
    active: color.parsley,
  },
  link: {
    text: color.scienceBlue,
    underline: color.semiTransparentIron,
    hover: color.dodgerBlue,
    underlineHover: color.semiTransparentDarkerScienceBlue,
    active: color.parsley,
  },
  icon: {
    background: color.mineShaft,
    hover: color.scienceBlue,
  },
  switch: {
    background: color.mercury,
    border: color.slateGray,
    switcher: color.slateGray,
    translate: transform.left,
    icon: color.white,
    textModeOff: opacity.visible,
    textModeOn: opacity.invisible,
  },
  card: {
    front: color.transculentWhite,
    back: color.transparentWhite,
  },
};
