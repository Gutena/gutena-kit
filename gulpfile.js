const gulp = require( 'gulp' ),
    postcss = require( 'gulp-postcss' ),
    notify = require( 'gulp-notify' ),
    uglify = require( 'gulp-uglify' ),
    rename = require( 'gulp-rename' ),
    autoprefixer = require( 'autoprefixer' ),
    cssnano = require( 'cssnano' ),
    concat = require( 'gulp-concat' ),
    lec = require( 'gulp-line-ending-corrector' ),
    del = require( 'del' ),
    zip = require( 'gulp-zip' );
const {series, parallel} = require('gulp');

var zipPath = [ 
    './', 
    './**', 
    '!./node_modules', 
    '!./node_modules/**', 
    '!./build', 
    '!./build/**', 
    '!./gulpfile.js', 
    '!./package.json', 
    '!./package-lock.json', 
    '!./phpcs.xml',
    '!./LICENSE',
    '!./README.md',
    '!./public/block_editor/package.json',
    '!./public/block_editor/package-lock.json',
    '!./public/block_editor/node_modules',
    '!./public/block_editor/node_modules/**',
    '!./public/block_editor/src','!./public/block_editor/src/**'
];
//Clean CSS, JS and zip
function clean_files(){
    let cleanPath = ['./build/gutena-kit.zip','./public/js/**/*.min.js', './public/css/**/*.min.css'];
    return del( cleanPath, { force : true }); 
}
//CSS minification
function css_minification(){
    return gulp.src(['./public/css/**/*.css'])
                .pipe(postcss([
                    autoprefixer(),
                    cssnano()
                ]))
                .pipe(lec())
                .pipe(rename({suffix : '.min'}))
                .pipe(gulp.dest('./public/css'))
                .pipe( notify( { 
                    message : 'Css Compilation successful',
                    onLast : true
                }));   
}

//JS minification
function js_minification(){
    return  gulp.src( './public/js/**/*.js' )
            .pipe( uglify() )
            .pipe( lec() )
            .pipe( rename( { suffix  : '.min' } ) )
            .pipe( gulp.dest('./public/js'))
            .pipe( notify( { 
                message : 'Js Compilation successful',
                onLast : true
            }));
}

//create zip file
function create_zip(){
 return gulp.src( zipPath, { base : '../' } )
        .pipe( zip( 'gutena-kit.zip' ) )
        .pipe( gulp.dest( './build/' ) )
        .pipe( notify({
            message : 'Zip process complete! Build Successfull',
            onLast : true
        }) );
}

exports.default = series(clean_files, parallel(css_minification,js_minification),create_zip);