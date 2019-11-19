<template>
<div>
    <t-nav-bar></t-nav-bar>
    <f-nav-bar></f-nav-bar>
    <a-nav-bar></a-nav-bar>
    <router-view class="router"></router-view>
</div>
</template>


<script>

import tNavBar from 'components/content/navbar/tNavBar'
import fNavBar from 'components/content/navbar/fNavBar'
import aNavBar from 'components/content/navbar/anavbar/aNavBar'

export default {
    name: 'App',
    components: {
        tNavBar,
        fNavBar,
        aNavBar,
    }
}
</script>

<style>
@import 'assets/css/base.css';

.router {
    width: 1200px;
    margin: 0 auto;
}
</style>
