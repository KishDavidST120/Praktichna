<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <button @click="logout">Logout</button>
    <button @click="dash">Dashboard</button>
  </div>
  <div>
    <h1>Current Theme: {{ theme }}</h1>
    <button @click="changeTheme">Toggle Theme</button>

    <h1>Current Language: {{ language }}</h1>
    <button @click="changeLanguage">Change Language</button>
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    language() {
      return this.$store.state.language;
    }
  },
  created() {
    if (!localStorage.getItem('authenticated')) {
      this.$router.push('/login');
    }
  },
  methods: {
    changeTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.$store.dispatch('updateTheme', newTheme);
    },
    changeLanguage() {
      const newLanguage = this.language === 'en' ? 'uk' : 'en';
      this.$store.dispatch('updateLanguage', newLanguage);
    },
    logout() {
      localStorage.removeItem('authenticated');
      this.$router.push('/login');
    },
    dash() {
      this.$router.push('/dashboard');
    }
  }
};
</script>
