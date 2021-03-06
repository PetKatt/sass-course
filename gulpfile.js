const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task("styles:watch", () => {
	gulp.watch('./sass/**/*.scss', ["styles"]);
});

gulp.task("default", ["styles", "styles:watch"]);