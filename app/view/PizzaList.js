Ext.define('Sencha.view.PizzaList', {
    extend: 'Ext.List',
    xtype: 'pizzalist',
    requires: ['Sencha.store.Pizzas'],
    
    config: {
      title: 'Pizza Menu',
      itemTpl: '{pizzaName}',
      store: 'Pizzas',   
    }
});