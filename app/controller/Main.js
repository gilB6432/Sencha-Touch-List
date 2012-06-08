Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
          main: 'mainpanel'
        },
        control: {
          'pizzalist': {
            itemtap: 'showDetail',
        }
      }
    },
    showDetail: function(nestedList, list, index, target, record) {
      this.getMain().push({
        xtype: 'pizzadetail',
        data: record.data
      });
    }
});