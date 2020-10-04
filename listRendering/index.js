const app = Vue.createApp({
    data() {
        return {
            items: [
                { id: 1, text: 'first!' },
                { id: 2, text: 'second!' },
                { id: 3, text: 'third!' },
            ],
        };
    },
});
app.mount('#app');