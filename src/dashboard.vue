<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to your Dashboard, {{username}}!</p>
    <button @click="logout">Logout</button>
    <button @click="home">Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    if (!localStorage.getItem('authenticated')) {
      this.$router.push('/login');
    } else {
      this.username = localStorage.getItem('username');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authenticated');
      this.$router.push('/login');
    },
    home(){
      this.$router.push('/');
    }
  }
};
</script>
