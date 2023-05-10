<template>
  <main>
    <Header>4/4</Header>
    <section class="content">
      <form ref="formContainer">
        <p>რედბერის მთავარი ღირებულება ჩვენი გუნდის <br/>
          თითოეული წევრია. გარემო, რომელსაც ჩვენი <br/>
          თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა <br/>
          წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის <br/>
          მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. <br/>
          <br/>
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად <br/>ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც <br/>გაიშვიათდა.
        </p>
        <h2 :class="{errorMessage: non_formal_meetings_error === false}">რა სიხშირით შეიძლება გვქონდეს საერთო <br/>
          არაფორმალური ონლაინ შეხვედრები, სადაც ყველა <br/>სურვილისამებრ ჩაერთვება?*
        </h2>
        <div class="input-box">
          <input
            v-model="non_formal_meetings"
            id="twice_a_week"
            name="non_formal_meetings"
            type="radio"
            value="twice_a_week"
          >
          <label for="twice_a_week">კვირაში ორჯერ</label>
        </div>
        <div class="input-box">
          <input
            v-model="non_formal_meetings"
            id="once_a_week"
            name="non_formal_meetings"
            type="radio"
            value="once_a_week"
          >
          <label for="once_a_week">კვირაში ერთხელ</label>
        </div>
        <div class="input-box">
          <input
            v-model="non_formal_meetings"
            id="once_in_a_two_weeks"
            name="non_formal_meetings"
            type="radio"
            value="once_in_a_two_weeks"
          >
          <label for="once_in_a_two_weeks">ორ კვირაში ერთხელ</label>
        </div> 
        <div class="input-box">
          <input
            v-model="non_formal_meetings"
            id="once_in_a_month"
            name="non_formal_meetings"
            type="radio"
            value="once_in_a_month"
          >
          <label for="once_in_a_month">თვეში ერთხელ</label>
        </div>
        <h2 :class="{errorMessage: what_about_meetings_in_live_error === false}">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან <br/> მუშაობას?*
        </h2>
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="zero"
            name="what_about_meetings_in_live"
            type="radio"
            value="0"
          >
          <label for="zero">0</label>
        </div>
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="one"
            name="what_about_meetings_in_live"
            type="radio"
            value="1"
          >
          <label for="one">1</label>
        </div> 
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="two"
            name="what_about_meetings_in_live"
            type="radio"
            value="2"
          >
          <label for="two">2</label>
        </div> 
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="three"
            name="what_about_meetings_in_live"
            type="radio"
            value="3"
          >
          <label for="three">3</label>
        </div> 
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="four"
            name="what_about_meetings_in_live"
            type="radio"
            value="4"
          >
          <label for="four">4</label>
        </div> 
        <div class="input-box">
          <input
            v-model="what_about_meetings_in_live"
            id="five"
            name="what_about_meetings_in_live"
            type="radio"
            value="5"
          >
          <label for="five">5</label>
        </div>
        <h2>
          რას ფიქრობ ფიზიკურ შეკრებებზე?
        </h2>
        <div class="textarea-box">
          <textarea rows="10" cols="60"></textarea>
        </div>
        <h2>
          რას ფიქრობ არსებულ გარემოზე: <br/>
          რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </h2>
        <div class="textarea-box">
          <textarea rows="10" cols="60"></textarea>
        </div>
        <div class="finish-box">
          <button class="finish-btn" @click.prevent="finish()">დასრულება</button>   
        </div>
      </form>
      <img src="../assets/Group 6.png" alt="office" class="info-img">
    </section>
      <button class="next-btn buttons" @click="onPreviousPage()">
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L3 11.3158L17 21.6316" stroke="#232323" stroke-width="2.4"/>
        </svg>
      </button>
  </main>
</template>

<script setup>
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import {ref, watch  } from 'vue'

const router = useRouter()
const formContainer = ref(null)



const non_formal_meetings = ref('')
const non_formal_meetings_error = ref(null)
const non_formal_meetings_validation = () => {
  if(non_formal_meetings.value === '') {
    non_formal_meetings_error.value = false
    return false 
  } else {return true}
}
watch(non_formal_meetings , () => {
  if(non_formal_meetings.value  !== '') {
    non_formal_meetings_error.value = true
  }
})


const what_about_meetings_in_live = ref('')
const what_about_meetings_in_live_error =ref(null)
const what_about_meetings_in_live_validation = () => {
  if (what_about_meetings_in_live.value === '') {
    what_about_meetings_in_live_error.value = false
    return false
  } else {return true}
}
watch(what_about_meetings_in_live, () => {
  if(what_about_meetings_in_live.value !== '') {
    what_about_meetings_in_live_error.value = true
  }
})

 
 


const onPreviousPage = () => {
  router.push('/vaccine')
}

 

const finish = () => {
  const non_formal_meetings_status = non_formal_meetings_validation();
  const what_about_meetings_in_live = what_about_meetings_in_live_validation();

  if( non_formal_meetings_status &&  what_about_meetings_in_live){
    router.push('/thanks')
  } else {

    formContainer.value.scrollTo({
      top: 330,
      behavior: 'smooth'

    })
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
  align-items: center;
}

.content {
  display: flex;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  min-width: 650px;
  height: 650px;
  overflow: auto;
}

form p {
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: var(--darkText);
  margin-bottom: 44px;
  
}


form h2 {
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  color: var(--dark);
  margin-bottom: 17px;
  margin-top: 47px;
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

.textarea-box textarea{
  margin-top: 20px;
  background-color: transparent;
  outline: none;
  color: var(--darkText);
  font-size: 18px;
  border: 0.8px solid var(--darkText);
  padding: 11px 20px 9px 20px;
}

.info-img{
  margin-left: 140px;
  margin-top: 60px;
}

.finish-btn{
  width: 180px;
  height: 56px;
  margin-top: 54px;
  padding: 17px, 29px, 17px, 29px;
  background-color: var(--finishBtn);
  border-radius: 42px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: var(--finishBtnText);
  line-height: 21.6px;
  cursor: pointer;

}
.finish-box{
  display: flex;
  flex-direction: row-reverse;
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