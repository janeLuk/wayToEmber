define(['ember', 'emberData'], function(){
    var Views = {}
    console.log('Views initialize start')

    Views.FormView = Ember.TextField.extend({
        classNames: ['form-list']
    });

    return Views
})