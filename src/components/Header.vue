<template>
  <header>
    <div class="header-top">
      <img src="../assets/title.png" alt="company title">
      <span><slot></slot></span>
    </div>
    <hr />
  </header>
</template>

<script setup>
 

</script>

<style scoped>
header, .header-top{
  width: 100%;
}
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-top span {
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: var(--darkText);

}

header  hr {
  border: 1.8px solid var(--darkText);
  margin-top: 23px;
}

</style>