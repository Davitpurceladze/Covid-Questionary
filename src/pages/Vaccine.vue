<template>
  <main>
    <Header>3/4</Header>
    <section class="content">
      <form>
        <h2 :class="{errorMessage: vaccineErrorMessage === false}">უკვე აცრილი ხარ?*</h2>
        <div class="input-box">
          <input
            v-model="vaccine_status"
            id="vaccine_yes"
            name="vaccine_status"
            type="radio"
            value="true"
          >
          <label for="vaccine_yes">კი</label>
        </div>
        <div class="input-box">
          <input
            v-model="vaccine_status"
            id="vaccine_no"
            name="vaccine_status"
            type="radio"
            value="false"
          >
          <label for="vaccine_no">არა</label>
        </div>
        <h2 class="test-question" :class="{active: vaccine_status === 'true'},{errorMessage: vaccinationStageErrorMessage === false}">აირჩიე რა ეტაპზე ხარ*</h2>
        <div class="input-box test-box" :class="{active: vaccine_status === 'true'}">
          <input
            v-model="vaccination_stage"
            id="first_dosage_and_registered_on_the_second"
            name="vaccine_stage"
            type="radio"
            value="first_dosage_and_registered_on_the_second"
          >
          <label for="first_dosage_and_registered_on_the_second">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
        </div>
        <div class="input-box test-box" :class="{active: vaccine_status === 'true'}">
          <input
            v-model="vaccination_stage"
            id="fully_vaccinated"
            name="vaccine_stage"
            type="radio"
            value="fully_vaccinated"
          >
          <label for="fully_vaccinated">სრულად აცრილი ვარ</label>
        </div>
        <div class="input-box test-box" :class="{active: vaccine_status === 'true'}">
          <input
            v-model="vaccination_stage"
            id="first_dosage_and_not_registered_yet"
            name="vaccine_stage"
            type="radio"
            value="first_dosage_and_not_registered_yet"
          >
          <label for="first_dosage_and_not_registered_yet">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
        </div>
        <p class="test-question" 
        :class="{active: vaccine_status === 'true' && vaccination_stage === 'first_dosage_and_not_registered_yet'}"
        >
           რომ არ გადადო, <br/>ბარემ ახლავე დარეგისტრირდი <br/> 
          <span> https://booking.moh.gov.ge/</span>
        </p>
        <h2 class="test-question" :class="{active: vaccine_status === 'false'},{errorMessage: waitingForErrorMessage === false}">რას ელოდები?*</h2>
        <div class="input-box test-box" :class="{active: vaccine_status === 'false'}">
          <input
            v-model="waiting_for"
            id="registered_and_waiting"
            name="waiting_for"
            type="radio"
            value="registered_and_waiting"
          >
          <label for="registered_and_waiting">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
        </div>
        <div class="input-box test-box" :class="{active: vaccine_status === 'false'}">
          <input
            v-model="waiting_for"
            id="not_planning"
            name="waiting_for"
            type="radio"
            value="not_planning"
          >
          <label for="not_planning">არ ვგეგმავ</label>
        </div>
        <div class="input-box test-box" :class="{active: vaccine_status === 'false'}">
          <input
            v-model="waiting_for"
            id="had_covid_and_planning_to_be_vaccinated"
            name="waiting_for"
            type="radio"
            value="had_covid_and_planning_to_be_vaccinated"
          >
          <label for="had_covid_and_planning_to_be_vaccinated">გადატანილი მაქვს და ვგეგმავ აცრას</label>
        </div>
        <p class="test-question" 
        :class="{active: vaccine_status === 'false' && waiting_for === 'had_covid_and_planning_to_be_vaccinated'}"
        >
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br/> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  
          <br/>
          <br/> 
          რეგისტრაციის ბმული<br/>
          <span> https://booking.moh.gov.ge/</span>
        </p>
      </form>
      <img src="../assets/Group 3.png" alt="vaccine" class="info-img">
    </section>
    <div class="button-box">
      <button class="next-btn buttons" @click="onPreviousPage()">
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L3 11.3158L17 21.6316" stroke="#232323" stroke-width="2.4"/>
        </svg>
      </button>
      <button class="next-btn buttons" @click="onNextPage()">
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L15 11.3158L1 21.6316" stroke="#232323" stroke-width="2.4"/>
        </svg>
      </button>
    </div>
</main>
</template>

<script setup>
import Header from '../components/Header.vue';
import {ref, watch, onMounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()


const vaccine_status = ref('')
const vaccineErrorMessage = ref(null)
const vaccineStatusError = () => {
  if(vaccine_status.value === '') {
    vaccineErrorMessage.value = false
    return false
  } else {
    vaccineErrorMessage.value = true
    return true
  }
}
watch(vaccine_status, () =>{
  if(vaccine_status.value !== ''){
    vaccineErrorMessage.value = true
  }
})

const vaccination_stage = ref('')
const vaccinationStageErrorMessage = ref(null)
const vaccineStageCheckFunc = () => {
  if(vaccination_stage.value === '' && vaccine_status.value === 'true'){
    vaccinationStageErrorMessage.value = false
    return false
  } else return true
}
watch(vaccination_stage, () => {
  if(vaccination_stage.value !== ''){
    vaccinationStageErrorMessage.value = true
  }
})



const waiting_for = ref('')
const waitingForErrorMessage = ref(null)
const waitingForCheckFunc = () => {
  if(waiting_for.value === '' && vaccine_status.value === 'false'){
    waitingForErrorMessage.value = false
    return false
  } else return true
}
watch(waiting_for, () => {
  if(waiting_for.value !== '' & waitingForErrorMessage.value === false){
    waitingForErrorMessage.value = true
  }
})

 


const onPreviousPage = () => {
  router.push('/covid')
}

const onNextPage = () => {
  const vaccineStatusCheck = vaccineStatusError()
  const vaccinationStageCheck = vaccineStageCheckFunc()
  const waitingForCheck = waitingForCheckFunc()

  if(vaccineStatusCheck && vaccinationStageCheck && waitingForCheck){
    localStorage.setItem('had_vaccine', vaccine_status.value)
    localStorage.setItem('vaccination_stage', vaccination_stage.value)
    localStorage.setItem('i_am_waiting', waiting_for.value)
    router.push('/office')
  }
}

onMounted(() => {
  if(localStorage.getItem('had_vaccine')){
    vaccine_status.value = localStorage.getItem('had_vaccine')

  }
  if(localStorage.getItem('vaccination_stage')){
    vaccination_stage.value = localStorage.getItem('vaccination_stage')
  }
  if(localStorage.getItem('i_am_waiting')){
    waiting_for.value = localStorage.getItem('i_am_waiting')
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

.content{
  display: flex;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  min-width: 650px;
}

form h2{
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  color: var(--dark);
  margin-bottom: 8px;
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

.info-img{
  margin-left: 90px;
  margin-top: 20px;
  width: 780px;
}

.button-box {
  display: flex;
  justify-content: center;
  gap: 117px;
}

.buttons {
  margin-top: -50px;
}

.test-box{
  display: none;
}

.test-question {
  display: none;
}

.test-box.active {
  display: flex;
}

.test-question.active {
  display: block;
}

form p {
  font-weight: 400;
  font-size: 20px;
  line-height: 24.14px;
  color: var(--darkText);
  margin-left: 60px;
  margin-top: 20px;
}

form p span {
  color: var(--link);
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