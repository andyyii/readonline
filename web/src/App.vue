<template>
<div>
    <t-nav-bar></t-nav-bar>
    <f-nav-bar></f-nav-bar>
    <a-nav-bar></a-nav-bar>
    <div class="content">
    <book-category></book-category>
    <router-view></router-view>
    </div>
</div>
</template>

<script>

import tNavBar from 'components/content/navbar/tNavBar'
import fNavBar from 'components/content/navbar/fNavBar'
import aNavBar from 'components/content/navbar/anavbar/aNavBar'
import bookCategory from 'components/content/category/bookCategory'

export default {
    name: 'App',
    components: {
        tNavBar,
        fNavBar,
        aNavBar,
        bookCategory
    }
}
</script>

<style>
@import 'assets/css/base.css';

.content {
    width: 1200px;
    margin: 0 auto;
}

</style>
