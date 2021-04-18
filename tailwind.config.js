module.exports = {
  // I did this HACK to support prettier-plugin-tailwind
  // This "hack" ensures your IDE detects all normal Tailwind classes, while JIT is used when compiling the project.
  // All the normal Tailwind classes should show up in code completion. It can't show all the new classes generated by JIT.
  // @see https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  // mode: process.env.NODE_ENV ? "jit" : undefined,
  // NOTE: I comment the mode jit because WSL2 does not support nice file watching
  // - making tailwind jit not usable in development
  // @see https://github.com/microsoft/WSL/issues/4739
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      white75: "hsla(0, 0%, 100%, 0.75)",
      white60: "hsla(0, 0%, 100%, 0.6)",
    },
  },
  screens: {
    md: "980px",
  },
  variants: {},
  plugins: [],
};
