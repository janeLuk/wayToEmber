define(['ember', 'emberData'], function(){
    var Model = {}
    console.log('Models initialize start')


    // Model collection
    Model.Store = DS.Store.extend({
        revision: 12,
        adapter: 'DS.FixtureAdapter'
    });

    // Model
    Model.Form = DS.Model.extend({
        type: DS.attr('string')
        , isRequired: DS.attr('boolean')
        , placeholder: DS.attr('string')
        , klass: DS.attr('string') //class - зарегистрированная торговая марка (tm)
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

    return Model
})