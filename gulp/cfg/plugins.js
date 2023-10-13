import replace from "gulp-replace";
import plubmer from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plubmer,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
