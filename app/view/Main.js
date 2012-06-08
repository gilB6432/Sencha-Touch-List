Ext.define('Sencha.view.Main', {
    /*extend: 'Ext.Panel',*//* used when there is no detail */
    extend: 'Ext.navigation.View',
    xtype: 'mainpanel',
    requires: [
      'Sencha.view.PizzaList',
      'Sencha.view.PizzaDetail',
      ],

    config: {
      items: [{
        xtype: 'pizzalist',
      }]
    }
});