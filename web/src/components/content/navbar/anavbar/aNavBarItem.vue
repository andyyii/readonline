<template>
<div class="a-nav-bar-item">
  <tab-bar-item path='/all' activeColor>=
    <div slot="item-text">全部作品</div>
  </tab-bar-item>
  <tab-bar-item path='/rank' activeColor>
    <div slot="item-text">连载</div>
  </tab-bar-item>
  <tab-bar-item path='/read' activeColor>
    <div slot="item-text">完本</div>
  </tab-bar-item>
</div>
</template>

<script>

import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'aNavBarItem',
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
.a-nav-bar-item {
  height: 39px;
  display: flex;
  line-height: 39px;
}
</style>