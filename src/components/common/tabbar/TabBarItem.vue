<template>
  <div class="tab-bar-item"  @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{activeClass:isActive}" class="itemHover"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 37px;
}

.itemHover {
  padding-top: 2px;    /* border-top: 2px solid transparent; */
  height: 39px;
  cursor: pointer; 
  transition: background-color 390ms;
}

.itemHover:hover {
  padding-top: 0;
  border-top: 2px solid #a1a2e9;
  height: 39px;
  background-color:rgb(99, 102, 105);
}

.activeClass {
  background-color: #a1a2e9;
  height: 39px;
}

.activeClass:hover {
  background-color: #a1a2e9;
}
</style>