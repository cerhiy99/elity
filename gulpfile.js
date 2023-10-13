import gulp from "gulp";

import { path } from "./gulp/cfg/path.js";
import { plugins } from "./gulp/cfg/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//===================================================//
// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
//import { ftp } from "./gulp/tasks/ftp.js";

//===================================================//

//===================================================//
// Observer, watching files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgSprive };

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const mainTasks = gulp.parallel(copy, html, scss, js, images);

const mainTasksEnd = gulp.parallel(watcher, server);

//===================================================//

//===================================================//
// When gulp start do:

const dev = gulp.series(reset, fonts, mainTasks, mainTasksEnd);
const build = gulp.series(reset, fonts, mainTasks);
const deployZIP = gulp.series(reset, fonts, mainTasks, zip);
//const deployFTP = gulp.series(reset, fonts, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
//export { deployFTP };

gulp.task("default", dev);

//===================================================//
