define(['ember', 'emberData'], function(){
    var Views = {}
    console.log('Views initialize start')
//
//    Views.FormView = Ember.TextField.extend({
//        classNames: ['form-list']
//    });

    App.ViewsContainer = Ember.ContainerView.extend({
        classNames: ['Container'],
    
        willInsertElement: function(){
            var model = this.get("content");
            for(i in model){
                console.log(i + " = " + model[i])
            }
        }
    });

    return Views
})
