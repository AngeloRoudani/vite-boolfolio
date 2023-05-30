<template>
    
    <div class="container mx-auto">

        <AppHeader/>
        <AppCards/>

    </div>


</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';

export default {
    components: {
        AppHeader,
        AppCards
    }
}

</script>

<style lang="scss">

@use './styles/general.scss';


</style>
