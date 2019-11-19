<template>
  <div class="t-nav-bar-bg">
    <nav-bar class="t-nav-bar">
      <div slot="left" class="left">享受阅读的乐趣！</div>
      <div slot="right"><a href="">登录</a> | <a href="">注册</a></div>
      </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'tNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>

.t-nav-bar-bg {
  background: url('~assets/img/bg_1.png');
  background-repeat: repeat-x;
  margin-bottom: 20px;
  border-bottom: 1px solid #dadada;
}

.t-nav-bar {
  line-height: 35px;
  height: 35px;
}

.t-nav-bar a {
  color: #3f3f3f;
  transition: color 390ms; 

}

.t-nav-bar a:hover {
  /* animation: colorchange 300ms forwards;
   animation-fill-mode : none | forwards | backwards | both;
    none：不改变默认行为。    
    forwards ：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。    
    backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。    
    both：向前和向后填充模式都被应用 */

  color: #91a3f3;
}

/* @keyframes colorchange {
  to {color: #91a3f3}
} */

.left {
  color: #a09e9e
}
</style>