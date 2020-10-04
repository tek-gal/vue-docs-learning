Vue.createApp({
    data() {
        return {
            message: '',
        };
    },
    methods: {
        simpleClick() {
            this.message = 'Another simple click...'
        },
        clickWithAlt() {
            this.message = 'Wow! Click with alt!'
        },
    }
}).mount('#app');