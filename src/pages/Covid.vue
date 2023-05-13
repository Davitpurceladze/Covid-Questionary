<template>
  <main>
    <Header>2/4</Header>
    <section class="content">
      <form>
        <h2 :class="{errorMessage : covidErrorMessage === false}">გაქვს გადატანილი Covid-19?*</h2>
        <div class="input-box">
          <input
            v-model="covid_status"
            id="covid_yes"
            name="covid_status"
            type="radio"
            value="yes"
          >
          <label for="covid_yes">კი</label> 
        </div>
        <div class="input-box">
          <input
            v-model="covid_status"
            id="covid_no"
            name="covid_status"
            type="radio"
            value="no"
          >
          <label for="covid_no">არა</label>
        </div>
        <div class="input-box">
          <input
          v-model="covid_status"
          id="covid_now"
          name="covid_status"
          type="radio"
          value="have_right_now"
          >
          <label for="covid_now">ახლა მაქვს</label> 
        </div>
        <h2 class="test-question" :class="{active: covid_status === 'yes'},{errorMessage: testErrorMessage === false}" >ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
        <div class="input-box test-box" :class="{active: covid_status === 'yes'}">
          <input
            v-model="test_status"
            id="test_yes"
            name="test_status"
            type="radio"
            value="true"
          >
          <label for="test_yes">კი</label> 
        </div>
        <div class="input-box test-box" :class="{active: covid_status === 'yes'}">
          <input
            v-model="test_status"
            id="test_no"
            name="test_status"
            type="radio"
            value="false"
          >
          <label for="test_no">არა</label> 
        </div>
        <h2 class="test-amount-title" :class="{active : test_status === 'true' && covid_status === 'yes'}">
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
        </h2>
        <input
          :class="{active : test_status === 'true' && covid_status === 'yes'}"
          v-model="antibodies_test_date"
          id="test_date"
          name="test_date"
          placeholder="რიცხვი"
          type="text"
        >
        <input
          :class="{active : test_status === 'true' && covid_status === 'yes'}"
          v-model="antibodies_amount"
          id="amount"
          name="amount"
          placeholder="ანტისხეულეის რაოდენობა"
          type="text"
        >
        <h2 class="covid_date" :class="{active: test_status === 'false' && covid_status === 'yes'},{errorMessage: covidDateErrorMessage === false}">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h2>
        <input
          :class="{active: test_status === 'false' && covid_status === 'yes'}"
          v-model="covid_date"
          id="covid_date"
          class="covid_date"
          name="covid_date"
          placeholder="დღე/თვე/წელი"
          type="date"
        >
      </form>
      <img src="../assets/Group 4.png" alt="temperature" class="info-img">
    </section>
    <div class="button-box">
      <button class="next-btn buttons"  @click="onPreviousPage()">
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L3 11.3158L17 21.6316" stroke="#232323" stroke-width="2.4"/>
        </svg>
      </button>
      <button class="next-btn buttons" @click="onNextPage()"> 
        <svg fill="none" height="23" viewBox="0 0 18 23" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L15 11.3158L1 21.6316" stroke-width="2.4" stroke="#232323" />
        </svg>
      </button>
    </div>
  </main>
</template>

<script setup>
import Header from '../components/Header.vue';
import {ref, watch, onMounted} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()


const covid_status = ref('')
const covidErrorMessage = ref(null)
const covidStatusCheckFunc = () => {
  if(covid_status.value === '') {
    covidErrorMessage.value = false
    return false
  }else return true
}
watch(covid_status, () => {
  if(covid_status.value !== '' && covidErrorMessage.value === false) {
    covidErrorMessage.value = true

  }
})



const test_status = ref('')
const testErrorMessage = ref(null)
const testStatusCheckFunc = () => {
  if(covid_status.value === 'yes' && test_status.value === '') {
    testErrorMessage.value = false
    return false
  } else return true
}
watch(test_status, () => {
  if(test_status.value !== '' && testErrorMessage.value === false) {
    testErrorMessage.value = true
  }
})


const covid_date = ref('')
const covidDateErrorMessage = ref(null)
const covidDateCheckFunc = () => {
  if(covid_status.value === 'yes' && test_status.value === 'false' && covid_date.value === ''){
    covidDateErrorMessage.value = false
    return false
  } return true
}
watch(covid_date, () => {
  if(covid_date.value !== '' && covidDateErrorMessage.value === false) {
    covidDateErrorMessage.value = true
  }
})


const antibodies_test_date = ref('')
const antibodies_amount = ref('')



const onNextPage = () => {
  const covidCheck = covidStatusCheckFunc()
  const testCheck = testStatusCheckFunc()
  const covidDateCheck = covidDateCheckFunc()

  if(covidCheck && testCheck && covidDateCheck) {
    localStorage.setItem('had_covid', covid_status.value)
    localStorage.setItem('had_antibody_test', test_status.value)
    localStorage.setItem('covid_sickness_date', covid_date.value)
    localStorage.setItem('antibodies_test_date', antibodies_test_date.value)
    localStorage.setItem('antibodies_amount', antibodies_amount.value)
    router.push('/vaccine')
  }
}

const onPreviousPage = () => {
  router.push('/personal')
}

onMounted(() => {
  if(localStorage.getItem('had_covid')) {
    covid_status.value = localStorage.getItem('had_covid')
  }

  if(localStorage.getItem('had_antibody_test')){
    test_status.value = localStorage.getItem('had_antibody_test')
  }

  if(localStorage.getItem('covid_sickness_date')){
    covid_date.value = localStorage.getItem('covid_sickness_date')
  }

  if(localStorage.getItem('antibodies_test_date')){
    antibodies_test_date.value = localStorage.getItem('antibodies_test_date')
  }

  if(localStorage.getItem('antibodies_amount')){
    antibodies_amount.value = localStorage.getItem('antibodies_amount')
  }
    
})


</script>

<style scoped>
main{
  width: 100%;
  height: 100%;
  padding: 90px 196px 104px 200px;
  display: flex;
  flex-direction: column;
}

form h2 {
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  color: var(--dark);
  margin-bottom: 8px;
}

.content {
  display: flex;
}

form{
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  min-width: 600px;
}

.input-box{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
  margin-bottom: 19px;
}

.input-box label {
  font-weight: 400;
  font-size: 20px;
  line-height: 24.14px;
  color: var(--dark);
}

.test-question{
  margin-top: 20px;
  display: none;
}

.test-question.active{
  display: block;
}

.test-box{
  display: none;
}

.test-box.active{
  display: flex;
}

.info-img{
  margin-left: 90px;
  margin-top: -23px;
  width: 850px;
}

form input[type='date']{
  margin-top: 8px;
  width: 513px;
  height: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.73px;
  color: var(--darkText);
  outline: none;
  border: 0.8px solid var(--darkText);
  background-color: transparent;
  padding: 11px 20px 9px 20px;
  margin-left: 20px;
  display: none;


}

form input[type="text"] {
  margin-top: 8px;
  width: 513px;
  height: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.73px;
  color: var(--darkText);
  outline: none;
  border: 0.8px solid var(--darkText);
  background-color: transparent;
  padding: 11px 20px 9px 20px;
  margin-left: 20px;
  display: none;
}
form input[type="text"].active{
  display: block;
}
form input[type="date"].active{
  display: block;
}

.test-amount-title{
  display: none;
}

.test-amount-title.active{
  display: block;
}

.buttons{
  margin-top: -50px;
}

.covid_date{
  display: none;
}

.covid_date.active {
  display: block;
}

.button-box{
  display: flex;
  justify-content: center;
  gap: 117px;
}

.errorMessage {
  color: red;
  animation: shake 1s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80%, 100% { transform: translateX(10px); }
}



 
</style>