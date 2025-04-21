<template>
  <div class="calculator-container">
    <div class="container">
      <img src="../assets/calc.png" alt="image" class="rotate-image"/>
    </div>
    <h1 class="calculator-title">Калькулятор трудового стажу</h1>

    <div
        v-for="(period, index) in periods"
        :key="index"
        class="period-input"
    >
      <div class="field-group">
        <label>Початок:</label>
        <input type="date" v-model="period.start"/>
      </div>
      <div class="field-group">
        <label>Кінець:</label>
        <input type="date" v-model="period.end"/>
      </div>
      <div class="field-group">
        <label>Коефіцієнт:</label>
        <select v-model.number="period.coefficient">
          <option :value="0.5">0.5</option>
          <option :value="0.75">0.75</option>
          <option :value="1">1</option>
          <option :value="1.25">1.25</option>
          <option :value="1.5">1.5</option>
        </select>
      </div>
      <button @click="removePeriod(index)" class="remove-btn">✖</button>
    </div>

    <button @click="addPeriod" class="add-btn">➕ Додати період</button>

    <div class="actions">
      <button @click="calculateSeniority" class="calc-btn">
        Розрахувати стаж
      </button>
    </div>

    <div v-if="errors.length" class="error-box">
      <ul>
        <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
      </ul>
    </div>

    <div v-if="result" class="result-box">
      Загальний стаж:
      <strong>
        {{ result.years }} років {{ result.months }} міс.
        {{ result.days }} днів
      </strong>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {parseISO, intervalToDuration} from 'date-fns'

const periods = ref([{start: '', end: '', coefficient: 1}])
const result = ref(null)
const errors = ref([])

function addPeriod() {
  periods.value.push({start: '', end: '', coefficient: 1})
}

function removePeriod(index) {
  periods.value.splice(index, 1)
}

function calculateSeniority() {
  errors.value = []
  let totalYears = 0
  let totalMonths = 0
  let totalDays = 0

  for (const period of periods.value) {
    if (!period.start || !period.end) {
      errors.value.push('Заповніть усі дати')
      continue
    }

    const start = parseISO(period.start)
    const end = parseISO(period.end)

    if (end < start) {
      errors.value.push(`Кінець раніше початку: ${period.start} — ${period.end}`)
      continue
    }

    const duration = intervalToDuration({start, end})
    const coef = period.coefficient

    totalYears += duration.years * coef
    totalMonths += duration.months * coef
    totalDays += duration.days * coef
  }

  let years = Math.floor(totalYears)
  let months = Math.floor(totalMonths)
  let days = Math.round(totalDays)

  if (days >= 30) {
    months += Math.floor(days / 30)
    days = days % 30
  }
  if (months >= 12) {
    years += Math.floor(months / 12)
    months = months % 12
  }

  result.value = {
    years: years || 0,
    months: months || 0,
    days: days || 0
  }
}
</script>
