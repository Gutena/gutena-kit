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
    //Zip path for create plugin production zip
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
        '!./README.md'
    ];
    
    //Ignore directory path
    let ignorePath = [
        '!./public/block_editor/',
        '!./includes/demo-import/admin-dashboard/',
        '!./includes/gutena-blocks/newsletter-block-gutena/',
        '!./includes/gutena-blocks/post-featured-tag-block-gutena/'
    ];

    //common sub-directory and files to ignore
    let ignoreFiles = [
        'package.json',
        'package-lock.json',
        'node_modules',
        'node_modules/**',
        'src',
        'src/**'
    ];
    
    //Prepare final zip files list
    ignorePath.forEach( function( ignorefilePath ) {
        ignoreFiles.forEach( function( ignorefile ) {
            zipPath.push( ignorefilePath+''+ignorefile );
        });
    });

    return gulp.src( zipPath, { base : '../' } )
            .pipe( zip( 'gutena-kit.zip' ) )
            .pipe( gulp.dest( './build/' ) )
            .pipe( notify({
                message : 'Zip process complete! Build Successfull',
                onLast : true
        }) );
}

exports.default = series(clean_files, parallel(css_minification,js_minification),create_zip);