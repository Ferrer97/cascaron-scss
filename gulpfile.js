const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css (done){
    src(('src/scss/**/*.scss'))
    .pipe(postcss( [autoprefixer()] ))
    .pipe((sass()))
    .pipe(dest('build/css'));

    done();
}

function dev () {
    watch('src/scss/**/*.scss', css);
};

exports.css = css;
exports.dev = dev;
exports.default = series( css, dev );