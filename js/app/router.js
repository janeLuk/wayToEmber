define(
    ['./models', './controllers', './views']
    , function (Model, Controller, View){

    var App = Ember.Application.create({
        LOG_TRANSITIONS: true
    })


    App.Router.map(function () {
        this.resource('main', { path: '/' });
    });

    App.MainRoute = Ember.Route.extend({
        model: function () {
            console.log(Model)
            return Model.Form.find();
        }
    });

    //Add sample data
    Model.Form.FIXTURES = [
        {
            id: 1
            , isRequired: true
            , placeholder: 'add some'
            , type: 'text'
        },
        {
            id: 2
            , isRequired: true
            , placeholder: 'add some 2'
            , type: 'text'
        },
        {
            id: 3
            , isRequired: true
            , placeholder: 'add some 3'
            , type: 'text'
        }
    ];
})