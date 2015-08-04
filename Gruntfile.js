// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/requirejs/require.js',
                    'src/client/js/*.js'
                ],
                dest: 'build/js/main.js'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/js/main.min.js': '<%= concat.main.dest %>'
                }
            }
        },


        copy: {
          main: {
            files: [
  
              // includes files within path and its sub-directories
              {expand: true, flatten: true, src: ['src/client/index.html'], dest: 'build/'},

              {expand: true, flatten: true, src: ['src/client/js/modules/*'], dest: 'build/js/modules/'},

              {expand: true, flatten: true, src: ['src/client/css/style.css'], dest: 'build/css/'}

            ],
          },
        }
    });




    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'copy']);
};