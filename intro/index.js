const app = new Vue({
    el: '#app',
    data: {
        message: 'Wow! My message!',
    }
});
app.message = 'Wow! Another one!';

// app-2
const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
    }
});

// app-3
const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    }
});

// app-4
const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'first todo' },
            { text: 'second todo' },
            { text: 'third todo' },
        ]
    }
});

// app-5
const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Here is supposed to be an event handler!',
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
    },
});

// app-6
const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Input something...',
    },
});