Ext.define('Sencha.view.PizzaDetail', {
    extend: 'Ext.Panel',
    xtype: 'pizzadetail',

    config: {
        title: 'Pizza Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: '{pizzaName} with {ingredients}',
    }
});