import { configure } from "@storybook/react";
import "!style-loader!css-loader!sass-loader!../styles/scss/styles.scss";

configure(require.context("../src/", true, /\.stories\.js$/), module);
