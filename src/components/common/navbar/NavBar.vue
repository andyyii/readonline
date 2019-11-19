<template>
  <div class="nav-bar">
   <div class="left"><slot name="left"></slot></div>
   <div class="center"><slot name="center"></slot></div>
   <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

.nav-bar {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}

.left, .right {
  width: 220px;
}


.right {
  text-align: end;
}

.center {
  flex: 1;
  text-align: center;
}
</style>