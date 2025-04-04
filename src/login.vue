<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        localStorage.setItem('authenticated', true);
        localStorage.setItem('username', this.username);
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials!');
      }
    }
  }
};
</script>
