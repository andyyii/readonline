<template>
  <div class="book-category">
    <ul>
      <li v-for="item in categories" :key="item.id"><a href="">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'bookCategory',
  data () {
    return {
      categories: []
    }
  },
  methods: {
    async fetch() {
        const res = await this.$http.get('rest/categories')
        this.categories = res.data
      }
  },
  created () {
    this.fetch()

  }
}
</script>

<style scoped>

.book-category {
  height: 300px;
  width: 220px;
  float: left;
  margin-right: 30px;
}

.book-category li {
  display: inline-block;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 13px;
}

.book-category li a {
  transition: 390ms;
}

.book-category li a:hover {
    color: #91a3f3;
}

</style>