<template>
  <div class="mainContainer">
    <div>
      <img src="../assets/Vector.png" alt="company logo" class="logo">
    </div>
    <RouterLink to="/personal" class="start-btn" >კითხვარის <br/> დაწყება</RouterLink>
  </div>
</template>

<script setup>

 

</script>

<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 101px;
  justify-content: center;
  align-items: center;
}

 

.start-btn{
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: var(--darkText);
  text-align: center;
  text-decoration: none;
}

.start-btn:hover{
  cursor: pointer;
  
}

</style>