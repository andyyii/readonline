<template>
  <nav-bar class="all-nav-bar">
    <div slot="left">
      <a href="">人气排序↓</a>
      <a href="">总收藏</a>
      <a href="">推荐票</a>
    </div>
    
    <div slot="right">共  本相关作品</div>
  </nav-bar>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'allNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.all-nav-bar {
  width: 950px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color:rgba(235, 235, 212, 0.301);
}

.all-nav-bar a {
  padding-right: 10px;
  padding-left: 10px;
  transition: 390ms;
}

.all-nav-bar a:hover {
    color: #91a3f3;
}
</style>