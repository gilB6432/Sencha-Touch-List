Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: ['Main'],
    stores: ['Pizzas'],
    models: ['Pizza'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Sencha.view.Main'
        });
    }
});