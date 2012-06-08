Ext.define('Sencha.model.Pizza', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['ingredients', 'pizzaName']
    }
/*
   pizzaName: function() {
        var d = this.data,
        names = [
            d.ingredients,
            d.pizzaName
        ];
         return names.join(" ");
    }*/
});