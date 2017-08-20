
module.exports = function (grunt) {
    
        require('load-grunt-tasks')(grunt);
    
        grunt.initConfig({
    
            watch: {
                options: {
                    livereload: true
                },
                files: '**/*'
            },
            connect: {
                debug: {
                    port: 80
                }
            },
            open: {
                debug: {
                    path: 'http://localhost/index.html',
                    app: 'Chrome'
                }
            },
            concurrent: {
                debug: ['watch', 'connect:debug', 'open:debug']
            }
        });
    
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-connect');
    
        grunt.registerTask('run-debug', ['concurrent:debug']);    
        grunt.registerTask('default', ['run-debug']);
    };
    
    