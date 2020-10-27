module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true
      },
      build: {
        src: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js',
        dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.min.js'
      }
    },

    concat: {
      dist: {
        src: [
          'calc.js',
        ],
        dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js',
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>-v<%= pkg.version %>.js': 'dist/<%= pkg.name %>-v<%= pkg.version %>.js'
        }
      }
    }

  });

  // Load the pluigin that concats multiple files together into a single one.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that ensures browser compatibility.
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'babel', 'uglify']);

};