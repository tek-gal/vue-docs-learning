Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const appComponent = new Vue({
    el: '#app-component',
    data: {
        groceryList: [
            { text: 'milk',   id: 1 },
            { text: 'apples', id: 2 },
            { text: 'bread',  id: 3 },
        ]
    }
});