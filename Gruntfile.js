module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'dist/<%= pkg.name %>.js',
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      }, 
      
      concat: {
        dist: {
          src: [
              'temp/calc.js',
            ],
          dest: 'dist/<%= pkg.name %>.js',
        },
      }

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['concat','uglify']);
  
  };