<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to your Dashboard, {{username}}!</p>
    <button @click="logout">Logout</button>
    <button @click="home">Home</button>
  </div>
  <div class="margin">
    <button @click="show = !show">Hello from Mixin</button>

    <!-- Анімація -->
    <transition name="fade">
      <p v-if="show" class="message">{{ message }}</p>
    </transition>
  </div>
</template>

<script>

import {myMixin} from './mixins.js'
export default {
  name: 'dashboard',
  mixins: [myMixin],
  data() {
    return {
      show: false,
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.message {
  font-size: 1.5rem;
  color: #42b983;
  margin-top: 10px;
}
.margin{
  margin-top: 5px;
}
</style>
