Vue.createApp({
    data() {
        return {
            ok: true,
            letter: 'A',
        }
    },
    methods: {
        toggleOk() {
            this.ok = !this.ok;
        },
        toggleLetter() {
            const letters = ['A', 'B', 'wow!'];
            const current = letters.indexOf(this.letter);
            const next = current === letters.length - 1 ? 0 : current + 1;
            this.letter = letters[next];
        },
    },
}).mount('#app');