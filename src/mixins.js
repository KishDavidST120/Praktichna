export const myMixin = {
    data() {
        return {
            message: '',
            username: ''
        }
    },
    created() {
        if (!localStorage.getItem('authenticated')) {
            this.$router.push('/login');
        } else {
            this.username = localStorage.getItem('username');
            this.message = 'Hello, ' + this.username;
        }
    }
}
