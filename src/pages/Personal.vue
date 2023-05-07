<template>
  <main>
    <Header>1/4</Header>
    <section class="content">
      <form>
        <label for="name">სახელი*</label>
        <input
          v-model="name"
          id="name"
          name="name"
          placeholder="სახელი"
          type="text"
        >
        <div class="error-box">
          <p class="error">{{ nameErrorMessage }}</p>
        </div>
        <label for="surname">გვარი*</label>
        <input
          v-model="surname"
          id="surname"
          name="surname"
          placeholder="გვარი"
          type="text"
        >
        <div class="error-box">
          <p class="error">{{ surnameErrorMessage }}</p>
        </div>
        <label for="email">მეილი*</label>
        <input
          v-model="email"
          id="email"
          name="email"
          placeholder="ელ.ფოსტა"
          type="email"
        >
        <div class="error-box">
          <p class="error">{{ emailErrorMessage }}</p>
        </div>
        <hr />
        <p class="warning">*-ით მონიშნული ველების შევსება <br>სავალდებულოა</p>
      </form>
      <img src="../assets/Group 5.png" alt="people" class="info-img">
    </section>
    <button class="next-btn" @click="onNextPage()">
      <svg 
        width="18" 
        height="23" 
        viewBox="0 0 18 23" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
      <path  
        d="M1 1L15 11.3158L1 21.6316" 
        stroke="#232323" 
        stroke-width="2.4"
      />
      </svg>
    </button>
  </main>
</template>


<script setup>
import Header from '../components/Header.vue';
import { useRouter} from 'vue-router'
import {ref, watch} from 'vue'

let trySubmit = false

const name = ref('')
const nameErrorMessage = ref('')
const nameCheckFunc = () => {
  if(name.value.trim() === '') {
    nameErrorMessage.value = 'სახელის ველი არ უნდა იყოს ცარიელი';
    return false
  }
  if(name.value.trim().length < 2 ) {
    nameErrorMessage.value = 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან';
    return false
  }
  nameErrorMessage.value = '';
  return true
}

watch(name, () => {
  if(trySubmit) {
    nameCheckFunc()
  }
})



const surname = ref('')
const surnameErrorMessage = ref('')
const surnameCheckFunc = () => {
  if(surname.value.trim() === '') {
    surnameErrorMessage.value = 'გვარის ველი არ უნდა იყოს ცარიელი';
    return false
  }
  if(surname.value.trim().length < 2 ) {
    surnameErrorMessage.value = 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან';
    return false
  }
  surnameErrorMessage.value = '';
  return true
}

watch(surname, () => {
  if(trySubmit) {
    surnameCheckFunc()
  }
})



const email = ref('')
const emailErrorMessage = ref('')
const emailCheckFunc = () => {
  if(email.value.trim() === '') {
    emailErrorMessage.value = 'ელ.ფოსტის ველი არ უნდა იყოს ცარიელი';
    return false
  }
  if(!email.value.trim().includes('@') || !email.value.trim().includes('.')) {
    emailErrorMessage.value = ' უნდა აკმაყოფილებდეს ელ.ფოსტის ფორმატს';
    return false
  }
  if(!email.value.trim().endsWith('@redberry.ge')) {
    emailErrorMessage.value = 'უნდა მთავრდებოდეს @redberry.ge სუფიქსით'
    return false
  }
  emailErrorMessage.value = '';
  return true
}

watch(email, () => {
  if(trySubmit) {
    emailCheckFunc()
  }
})



const router = useRouter()

const onNextPage = () => {
  trySubmit = true
  const nameStatus = nameCheckFunc()
  const surnameStatus = surnameCheckFunc()
  const emailStatus = emailCheckFunc()

  if(nameStatus && surnameStatus && emailStatus) {
    router.push('/covid')
  }
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

.content{
  display: flex;
}

form{
  display: flex;
  flex-direction: column;
  margin-top: 42px;
}

form label {
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  color: var(--darkText)
}

form input {
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
}

 

form hr {
  width: 237px;
  border: 0.8px solid  var(--dark);
  margin-top: 64px
}

.info-img{
  margin-left: 138px;
  margin-top: -50px;
}

.warning {
  font-weight: 400;
  font-size: 16px;
  line-height: 19.31px;
  margin-top: 20px;
  color: var(--warning);
}


.error-box{
  width: fit-content;
  height: 20px;
  margin-bottom: 47px;
}

.error{
  font-weight: 400;
  font-size: 16px;
  line-height: 19.31px;
  color: var(--error);
}

</style>