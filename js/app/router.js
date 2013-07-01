define(
    ['./models', './controllers', './views', 'ember', 'emberData']
    , function (Model, Controller, View){

    var App = Ember.Application.create({
        LOG_TRANSITIONS: true
    })

    App.Router.map(function () {
        this.resource('form');
    });

    App.Store = Model.Store;
    App.Form = Model.Form;


    App.IndexRoute = Ember.Route.extend({
        model: function () {
            return App.Form.find();
        }
    });
})