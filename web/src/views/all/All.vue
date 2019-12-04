<template>
  <div class="all">
    <ul>
      <li v-for="item in books" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>



export default {
  name: 'All',
  data () {
    return {
      books:[]
    }
  },
  methods: {
    async fetch() {
        const res = await this.$http.get('rest/books')
        this.books = res.data
        console.log(res.data)
      },
  },
  created () {
    this.fetch()
  }
}
</script>

<style scoped>
</style>