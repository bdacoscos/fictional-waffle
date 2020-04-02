import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import scss from "rollup-plugin-scss";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.min.js",
    format: "cjs"
  },
  external: ["react"],
  plugins: [
    scss(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    uglify()
  ]
};
