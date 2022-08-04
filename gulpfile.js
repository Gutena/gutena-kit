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
    git = require('gulp-git'),
    zip = require( 'gulp-zip' );
const {series, parallel} = require('gulp');

//Add Gutena Blocks Repo e.g. https://github.com/Gutena/photofeed-block-gutena.git
var GutenaBlocksRepo = [
    'newsletter-block-gutena',
    'post-featured-tag-block-gutena',
    'photofeed-block-gutena'
];

//Clean CSS, JS, zip and gutena-blocks
function clean_files(){
    let cleanPath = ['./build/gutena-kit.zip','./public/js/**/*.min.js', './public/css/**/*.min.css','./includes/gutena-blocks/**'];
    return del( cleanPath, { force : true }); 
}

//Clean Gutena blocks
function clean_gutena_blocks(){

    //files and folders to delete
    let cleanBlockPath = ['/.git', '/.github', '/.wordpress-org', '/node_modules', '/src', '/.distignore', '/.editorconfig', '/.gitignore', '/gulpfile.js', '/package.json', '/package-lock.json'];
    let cleanBlockFiles = [];

    //prepare gutena blocks files path to delete
    GutenaBlocksRepo.forEach( function( subDir ) {
        cleanBlockPath.forEach( function( fileToClean ) {
            cleanBlockFiles.push( './includes/gutena-blocks/'+subDir+''+fileToClean );
        });
    });

    if( cleanBlockFiles.length>1 ){
        //add git folder path to remove
        cleanBlockFiles.push( './includes/gutena-blocks/.git' );
        //delete unwanted files
        return del( cleanBlockFiles, { force : true });
    }   
}

//Clone gutena blocks from git
function clone_gutena_blocks(){

    return new Promise( function( resolve, reject ) {
        //Repo array to clone
        let cloneRepo = GutenaBlocksRepo;
        //variable to track completion
        let cloneCompleted = 0;
        //Repo loop start
        cloneRepo.forEach( function( subDir ) {
            //Git Rapo Path
            let clonePath = 'https://github.com/Gutena/'+subDir+'.git';
            //Sub folder path for clone repo
            let blockSubFolder = './includes/gutena-blocks/'+subDir;
            //Clone repo start
            git.clone(clonePath, {args: blockSubFolder}, function(err) {
                if(err){
                    //throw err;
                    reject(err);
                }else{

                    ++cloneCompleted;
                }
                //Resolve after completion 
                if( cloneRepo.length === cloneCompleted ){
                    resolve('Clone Gutena blocks successfully');
                }
            }); 
        });
    });
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
        '!./includes/demo-import/admin-dashboard/'
    ];

    //Prepare Ignore directory list
    GutenaBlocksRepo.forEach( function( ignoreDirPath ) {
        ignorePath.push( '!./includes/gutena-blocks/'+ignoreDirPath+'/' );
    });

    //common sub-directory and files to ignore
    let ignoreFiles = [
        'gulpfile.js',
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

//(cmd: gulp build): run for development. It retain src and all other files
exports.build = series(clean_files, clone_gutena_blocks, parallel(css_minification,js_minification),create_zip);
//(cmd: gulp): run for production. It delete src and other unnecessary files
exports.default = series(clean_files, clone_gutena_blocks, clean_gutena_blocks, parallel(css_minification,js_minification),create_zip);