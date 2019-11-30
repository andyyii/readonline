<template>
  <nav-bar class="f-nav-bar">
    <img slot="left" src="~assets/img/icon.png" alt="">
    <div slot="center" class="center">
      <form action="">
        <input type="text" name="bookname" placeholder="请输入小说或作者" class="search">
        <input type="submit" value="" class="submit">
      </form>
    </div>
    <div slot="right" class="right"><a href="" class="store"></a></div>
  </nav-bar>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'fNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.f-nav-bar {
  height: 55px;
}

.center, .center form {
  text-align: center;
  line-height: 55px;
  height: 55px;
}

.center .search {
  width: 320px;
  height: 33.9px;
  padding: 5px;
  border: 0;
  outline: none;
  border: 1px solid #ccc;
  border-right: 0;
}

.submit {
  position: relative;
  top: 11px;
  width: 35px;
  height: 35px;
  background: url('~assets/img/search.svg');
  transition: background 390ms;
  outline: none;
}

.submit:hover {
  background: url(~assets/img/search_active.svg);
  cursor: pointer;
}

.right{
  line-height: 55px;
  height: 55px;
}

.store {
  display: inline-block;
  position: relative;
  top: 10px;
  background: url('~assets/img/store.svg');
  transition: background 390ms, border 390ms;
  border: 1px solid rgb(223, 222, 222);
  height: 35px;
  width: 100px;
}

.store:hover {
  background: url('~assets/img/store_active.svg');
  border: 1px solid #91a3f5;
}

</style>