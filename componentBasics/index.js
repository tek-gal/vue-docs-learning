const app = Vue.createApp({
    data() {
        return {
            titles: [
                'title 1',
                'title 2',
                'title 3'
            ],
            titlesFontSize: 1,
            searchText: 'wow!',
            anotherSearchText: 'anotherSearchText!',
        };
    },
    methods: {
        enlargeText(value) {
            this.titlesFontSize += value;
        }
    },
});

app.component('counter', {
    data() {
        return {
            count: 0,
        };
    },
    template: `
    <div>
        <button @click="count++">You have clicked me {{ count }} times!</button>
    </div>
    `,
});

app.component('my-title', {
    props: ['title'],
    template: `
        <h4 style="color: red">
            {{ title }}
        </h4>
        <button @click="$emit('enlarge-text', 0.1)">
            Enlarge text!
        </button>
    `,
});

app.component('custom-input', {
    props: ['modelValue'],
    template: `
        <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    `,
});

app.component('computed-custom-input', {
    props: ['modelValue'],
    template: `
        <input v-model="value" >
    `,
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
});

app.component('alert-box', {
    template: `
        <div style="color: red">
            <slot></slot>
        </div>
    `,
})

app.mount("#app");