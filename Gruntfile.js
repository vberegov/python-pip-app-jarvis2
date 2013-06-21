/* jshint node: true, camelcase: false, maxlen: false */

module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: './static',
          cleanBowerDir: true
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'static/js/app/*.js', 'static/widgets/*/*.js'],
      options: {
        /* enforcing options */
        bitwise: false,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        es3: false,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        plusplus: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        maxparams: 5,
        maxdepth: 5,
        maxstatements: 20,
        maxcomplexity: 5,
        maxlen: 80,
        /* relaxing options */
        browser: true,
        globals: {
          angular: true,
          $: true,
          EventSource: true
        }
      },
    },
    watch: {
      scripts: {
        files: [
          'static/js/app/*.js',
          'static/widgets/*/*.js',
          'static/widgets/*/*.less',
        ],
        tasks: ['jshint', 'less'],
      }
    },
    jsbeautifier: {
      files: ['Gruntfile.js', 'static/js/app/*.js', 'static/widgets/*/*.js'],
      options: {
        indent_size: 2,
        jslint_happy: true
      }
    },
    less: {
      development: {
        files: {
          'static/widgets/atb/atb.css': 'static/widgets/atb/atb.less',
          'static/widgets/hackernews/hackernews.css': 'static/widgets/hackernews/hackernews.less',
          'static/widgets/time/time.css': 'static/widgets/time/time.less',
          'static/widgets/yr/yr.css': 'static/widgets/yr/yr.less'
        }
      }
    }
  });

  grunt.registerTask('default', ['jsbeautifier', 'jshint', 'less']);
};
