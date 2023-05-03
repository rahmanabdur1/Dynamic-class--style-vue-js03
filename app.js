const app = Vue.createApp({
    data() {
        return {
            hobbies: ["Coding", "Reading", "Running", "Writing", "Fishing"],
            SelectedHobbies: [],
        }
    },
    methods: {
        anyHobby(hobby) {
            if (this.SelectedHobbies.indexOf(hobby) !== -1) {
                return this.removeHobby(hobby);
            }
            this.SelectedHobbies.push(hobby)
        },
        removeHobby(hobby) {
            const index = this.SelectedHobbies.indexOf(hobby)
            if (index > -1) {
                this.SelectedHobbies.splice(index, 1)

            }
        }
    }
})

app.mount('#app')