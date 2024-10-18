/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 200,
  arrowParens: "avoid",
  trailingComma: "es5",
  proseWrap: "never",
};

export default config;
