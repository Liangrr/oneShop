var gulp = require('gulp');
//删除
var del = require('del');
//解析sass文件
var sass = require("gulp-sass");
//连接服务器
var connect = require('gulp-connect');
//// 常用插件
//// 压缩javascript文件，减小文件大小
//var uglify = require('gulp-uglify');
//// 文件重命名
//var rename = require('gulp-rename');   
//// 压缩css
//var cssmin = require('gulp-cssmin');
//// 合并javascript文件，减少网络请求
//var concat = require('gulp-concat');
//// 压缩图片
//var imagemin = require("gulp-imagemin");
//// 压缩html
//var htmlmin = require('gulp-htmlmin');
//// babel es6转化为es5
//var babel = require("gulp-babel");    // 用于ES6转化ES5


// sass转为css,然后合并css文件再输出
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('common.css'))
      .pipe(gulp.dest('css'))
  });

// 先执行监听，然后启动服务器，如果监听的文件发生改变，执行reload
gulp.task('myServer',['watcher'],function(){
       connect.server({
               name:'myServer', // 可忽略，不配置
               root:'oneshop',    //根目录，默认：gulpfile.js所在根目录
               port:3639,    //端口，默认：8080
               //host:'你的域名（写出了又要被百度删了，心很累！）',  //可忽略，默认值：localhost
               livereload:true // 是否自动重载，自然是true了，如果不想自动重载，就false。
       });
});
//添加gulp.watch()实时监听
gulp.task('watcher',function(){
    gulp.watch('**/*',['loadfiles']); // 需要手动运行：gulp  watcher 才会开始监视。
});
//给需要重载的文件加上connect.reload()控制
gulp.task('loadfiles',function(){
    	gulp.src('**/*')
    	.pipe(connect.reload());
});
