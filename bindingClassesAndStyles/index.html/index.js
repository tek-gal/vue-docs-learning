const app = Vue.createApp({
    data() {
        return {
            isActive: true,
            hasError: false,
            styleObject: {
                color: 'green'
            },
        };
    },
    methods: {
        toggleError() {
            this.hasError = !this.hasError;
            this.isActive = !this.hasError;
        },
    },
});

app.component('my-component', {
    template: `
        <h1
            :class="$attrs.class"
            :style="$attrs.style"
        >Header</h1>
        <p class="foo bar">Hi!</p>
    `,
});

app.mount('#binding');
