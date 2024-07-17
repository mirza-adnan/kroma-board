export const hexPattern = new RegExp(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
export const hslPattern = new RegExp(
  /^(hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\))$/
);
export const rgbPattern = new RegExp(
  /^(rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\))$/
);
export const hslaPattern = new RegExp(
  /^(hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/
);
export const rgbaPattern = new RegExp(
  /^(rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/
);
// export const universalPattern =
//   /^(hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\))|(hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\))|(#?[0-9A-Fa-f]{3,6})|(rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\))|(rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\))$/;

export const universalPattern = new RegExp(
  hexPattern.source +
    "|" +
    hslPattern.source +
    "|" +
    rgbPattern.source +
    "|" +
    hslaPattern.source +
    "|" +
    rgbaPattern.source
);

export const validateColor = (val) => {
  console.log(val);
  let color;
  if (val.match(hexPattern)) {
    color = val.match(hexPattern)[0];
    if (color[0] !== "#") {
      color = "#" + color;
      console.log("Here2");
    }
    return color;
  } else if (val.match(universalPattern)) {
    color = val.match(universalPattern)[0];
    console.log("Here3");
    return color;
  }
  return false;
};
