<template>
<div class="a-nav-bar-bg">
  <nav-bar class="a-nav-bar">
    <div slot="left" class="left">≡ 作品分类</div>
    <div slot="center" class="center"><a-nav-bar-item></a-nav-bar-item></div>



    <div slot="right" class="right"><i><img src="~assets/img/book.svg"></i></div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import aNavBarItem from 'components/content/navbar/anavbar/aNavBarItem'
export default {
  name: 'aNavBar',
  components: {
    NavBar,
    aNavBarItem
  }
}
</script>

<style scoped>
.a-nav-bar-bg {
  background: url('~assets/img/bg_2.jpg');
  background-repeat: repeat-x;
  margin: 20px 0 30px 0;
  height: 39px;
  line-height: 39px;
  color: rgb(252, 249, 249);
}

.left {
  padding-left: 20px;
  background-color: rgb(99, 102, 105);
}

.center {
  margin-left: 30px;
}





.right{
  line-height: 39px;
}

.right img{
  padding-top: 9px;
  width: 30px;
  height: 30px;
}

</style>