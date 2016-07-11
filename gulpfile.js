var gulp = require('gulp');
var env = require('gulp-env');

gulp.task('copy', function() {
    env(".env.json");

    gulp.src(['bootstrap-4','laravel-5']).pipe(gulp.dest(process.env.snippets));
});

gulp.task('default', function() {
    gulp.watch('**/*.sublime-snippet', ['copy']);
});