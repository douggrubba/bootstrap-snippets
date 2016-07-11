var gulp = require('gulp');
var env = require('gulp-env');

gulp.task('copy', function() {
    env(".env.json");

    return gulp.src('./snippets/*.sublime-snippet', { base: './snippets' })
        .pipe(gulp.dest(process.env.snippets));
});

gulp.task('default', function() {
    gulp.watch('./snippets/*.sublime-snippet', ['copy']);
});