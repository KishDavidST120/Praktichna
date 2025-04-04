<template>
  <div id="app">
    <h2>Форма реєстрації</h2>
    <form @submit.prevent="submitForm">
      <!-- Текстове поле -->
      <div>
        <label for="name">Ім'я:</label>
        <input type="text" id="name" v-model="name" required />
        <p v-if="!name" style="color: red;">Це поле є обов'язковим</p>
      </div>

      <!-- Чекбокс -->
      <div>
        <input type="checkbox" id="accept" v-model="accepted" />
        <label for="accept">Я погоджуюсь з умовами</label>
        <p v-if="!accepted" style="color: red;">Потрібно погодитись з умовами</p>
      </div>

      <div>
        <label for="gender">Стать:</label>
        <div>
          <input type="radio" id="male" v-model="gender" value="Чоловік" /> Чоловік
          <input type="radio" id="female" v-model="gender" value="Жінка" /> Жінка
        </div>
      </div>

      <div>
        <label for="country">Країна:</label>
        <select v-model="country" required>
          <option disabled value="">Оберіть країну</option>
          <option>Україна</option>
          <option>США</option>
          <option>Німеччина</option>
        </select>
      </div>

      <button type="submit" :disabled="!isFormValid">Надіслати</button>
    </form>

    <div v-if="formSubmitted">
      <h3>Ваша форма:</h3>
      <p>Ім'я: {{ name }}</p>
      <p>Стать: {{ gender }}</p>
      <p>Країна: {{ country }}</p>
      <p>Погодився: {{ accepted ? 'Так' : 'Ні' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      accepted: false,
      gender: "",
      country: "",
      formSubmitted: false
    };
  },
  computed: {
    isFormValid() {
      return this.name && this.accepted && this.gender && this.country;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.formSubmitted = true;
      } else {
        alert("Будь ласка, заповніть всі обов'язкові поля!");
      }
    }
  }
};
</script>
