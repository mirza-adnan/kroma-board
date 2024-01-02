export const hexPattern = /(#?[0-9A-Fa-f]{3,6})/;
export const hslPattern =
  /^(hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\))$/;
export const rgbPattern =
  /^(rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\))$/;
export const hslaPattern =
  /^(hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/;
export const rgbaPattern =
  /^(rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/;
export const universalPattern =
  /^(hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\))|(hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\))|(#?[0-9A-Fa-f]{3,6})|(rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\))|(rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\))$/;

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
