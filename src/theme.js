const common = {
  breakpoint: {
    medium: 768,
    large: 1200,
  },
  shadow: {
    thin: "0px 4px 12px rgba(186, 199, 213, 0.1)",
    thick: `0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03)`,
  },
  white: "#FFFFFF",
  animation: "0.3s",
  themeAnimation: "0.5s 0.25s",
  switchAnimation: "0.6s cubic-bezier(0.66, -0.60, 0.66, 0.90) 0s",
};

const color = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  semiTransparentMineShaft: "#363636B8",
  slateGray: "#6E7E91",
  semiTransparentIron: "#D1D5DA4D",
  semiTransparentLighterIron: "#D1D5DA1A",
  scienceBlue: "#0366D6",
  semiTransparentScienceBlue: "#0366D633",
  semiTransparentDarkerScienceBlue: "#0366D680",
  anakiwa: "#8CC2FF",
  parsley: "#14462033",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  mercury: "#E5E5E5",
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
  primary: color.dodgerBlue,
  alternative: color.scienceBlue,
  textPrimary: color.white,
  textAlternative: color.white,
  background: color.mineShaft,
  border: color.semiTransparentMineShaft,
  underline: color.semiTransparentLighterIron,
  tile: {
    background: color.semiTransparentMineShaft,
    border: color.semiTransparentLighterIron,
    hover: color.semiTransparentDarkerScienceBlue,
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
    underline: color.semiTransparentLighterIron,
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
};

export const light = {
  ...common,
  primary: color.scienceBlue,
  alternative: color.dodgerBlue,
  textPrimary: color.mineShaft,
  textAlternative: color.slateGray,
  background: color.whiteLilac,
  border: color.semiTransparentIron,
  underline: color.semiTransparentIron,
  tile: {
    background: color.white,
    border: color.semiTransparentIron,
    hover: color.semiTransparentScienceBlue,
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
};
