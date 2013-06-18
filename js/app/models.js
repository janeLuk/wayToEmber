define(['ember', 'emberData'], function(){
    var Model = {}
    console.log('Models initialize start')

    // Model
    Model.Form = DS.Model.extend({
        type: DS.attr('string')
        , isRequired: DS.attr('boolean')
        , placeholder: DS.attr('string')
        , klass: DS.attr('string') //class - зарегистрированная торговая марка (tm)
    });

    // Model collection
    Model.Store = DS.Store.extend({
      revision: 12,
      adapter: 'DS.FixtureAdapter'
    });

    return Model
})