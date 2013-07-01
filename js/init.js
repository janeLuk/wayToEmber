require.config({
    paths: {
        ember: '../lib/ember-1.0.0-rc.5.min'
        ,emberData: '../lib/ember-data-latest'
        ,jquery: '../lib/jquery.min'
        ,handlebars: '../lib/handlebars'
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    shim:{
        'ember':{
            deps:[ 'jquery', 'handlebars'],
            exports:'Ember'
        },
        'emberData':{
            deps:[ 'ember'],
            exports:'DS'
        },
        'jquery':{
            exports: '$'
        },
        'handlebars':{
            exports: 'Handlebars'
        }
    }
});

require(['app/router']);