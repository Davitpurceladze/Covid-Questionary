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
            value="covid_yes"
          >
          <label for="covid_yes">კი</label> 
        </div>
        <div class="input-box">
          <input
            v-model="covid_status"
            id="covid_no"
            name="covid_status"
            type="radio"
            value="covid_no"
          >
          <label for="covid_no">არა</label>
        </div>
        <div class="input-box">
          <input
            v-model="covid_status"
            id="covid_now"
            name="covid_status"
            type="radio"
            value="covid_now"
          >
          <label for="covid_now">ახლა მაქვს</label> 
        </div>
        <h2 class="test-question" :class="{active: covid_status === 'covid_yes'}">ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
        <div class="input-box test-box" :class="{active: covid_status === 'covid_yes'}">
          <input
            v-model="test_status"
            id="test_yes"
            name="test_status"
            type="radio"
            value="test_yes"
          >
          <label for="test_yes">კი</label> 
        </div>
        <div class="input-box test-box" :class="{active: covid_status === 'covid_yes'}">
          <input
            v-model="test_status"
            id="test_no"
            name="test_status"
            type="radio"
            value="test_no"
          >
          <label for="test_no">არა</label> 
        </div>
        <h2 class="test-amount-title" :class="{active : test_status === 'test_yes' && covid_status === 'covid_yes'}">
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*
        </h2>
        <input
          :class="{active : test_status === 'test_yes' && covid_status === 'covid_yes'}"
          id="test_date"
          name="test_date"
          placeholder="რიცხვი"
          type="text"
        >
        <input
          :class="{active : test_status === 'test_yes' && covid_status === 'covid_yes'}"
          id="amount"
          name="amount"
          placeholder="ანტისხეულეის რაოდენობა"
          type="text"
        >
        <h2 class="covid_date" :class="{active: test_status === 'test_no' && covid_status === 'covid_yes'}">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h2>
        <input
          :class="{active: test_status === 'test_no' && covid_status === 'covid_yes'}"
          id="covid_date"
          class="covid_date"
          name="covid_date"
          placeholder="დღე/თვე/წელი"
          type="text"
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
import {ref, watch} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const covid_status = ref('')
const test_status = ref('')
const covidErrorMessage = ref(null)

 

const covidStatusError = () => {
  if(covid_status.value === '') {
    covidErrorMessage.value = false
    return false
  } else {
    covidErrorMessage.value = true
    return true
  }

} 

watch(covid_status, () => {
  if(covid_status.value !== '' && covidErrorMessage.value === false) {
    covidErrorMessage.value = true

  }
})

const onNextPage = () => {
  if(covidStatusError()) {
    router.push('/vaccine')
  }
}

const onPreviousPage = () => {
  router.push('/personal')
}


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

form input[type="text"]{
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