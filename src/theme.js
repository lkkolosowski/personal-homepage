const common = {
  breakpoint: {
    medium: 768,
    large: 1200,
  },
  shadow: {
    thin: "0px 4px 12px rgba(186, 199, 213, 0.5)",
    thick: `0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03)`,
  },
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

export const theme = {
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
    background: color.scienceBlue,
    border: color.semiTransparentIron,
    hover: color.anakiwa,
    active: color.parsley,
  },
  link: {
    text: color.dodgerBlue,
    underline: color.semiTransparentIron,
    hover: color.scienceBlue,
    active: color.parsley,
  },
  icon: {
    background: color.white,
    hover: color.scienceBlue,
  },
};

// export const theme = {
//   ...common,
//   primary: color.scienceBlue,
//   alternative: color.dodgerBlue,
//   textPrimary: color.mineShaft,
//   textAlternative: color.slateGray,
//   background: color.whiteLilac,
//   border: color.semiTransparentIron,
//   underline: color.semiTransparentIron,
//   tile: {
//     background: color.white,
//     border: color.semiTransparentIron,
//     hover: color.semiTransparentScienceBlue,
//   },
//   button: {
//     text: color.white,
//     background: color.scienceBlue,
//     border: color.semiTransparentIron,
//     hover: color.anakiwa,
//     active: color.parsley,
//   },
//   link: {
//     text: color.scienceBlue,
//     underline: color.semiTransparentIron,
//     hover: color.dodgerBlue,
//     active: color.parsley,
//   },
//   icon: {
//     background: color.mineShaft,
//     hover: color.scienceBlue,
// },
// };
