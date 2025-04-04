<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Змінити повідомлення</button>
    <input v-model="userInput" placeholder="Введіть текст">
    <p>Ви ввели: {{ userInput }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Привіт, Vue!',
      userInput: ''
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Привіт, ' + this.userInput + '!';
    }
  }
};
</script>

