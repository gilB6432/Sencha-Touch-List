Ext.define('Sencha.store.Pizzas', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Sencha.model.Pizza',
        sorters: 'pizzaName',
        data: [
            { ingredients: "Cheese with no sauce", pizzaName: "White Pizza" },
            { ingredients: "Pepperoni and cheese", pizzaName: "Pepperoni Pizza" },
            { ingredients: "Sausage and cheese", pizzaName: "Sausage Pizza" },
            { ingredients: "Sausage, pepperoni and cheese", pizzaName: "Sausage & Pepperoni Pizza" },
            { ingredients: "Broccoli, onions, mushrooms and cheese", pizzaName: "Veggie Pizza" },
        ]
    }
});