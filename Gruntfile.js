module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['css/**/*.{scss,sass}'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            options: {
                sourceComments: true,
                outputStyle: 'expanded'
            },
            dev: {
                files: {
                    'css/styles.css': 'css/main.sass'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass:dev', 'watch']);

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
