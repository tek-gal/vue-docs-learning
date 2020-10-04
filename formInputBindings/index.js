Vue.createApp({
    data() {
        return {
            colors: [],
            like: 'yes',
            lazyTest: 'wow!',
        };
    },
    methods: {
        clearColors() {
            this.colors = [];
        },
    },
}).mount("#app");