<template>

    <div class="container mx-auto">
        <div class="row d-flex flex-wrap">

            <AppHeader/>

            <router-view>

            </router-view>

        </div>

    </div>


</template>

<script>

import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';

export default {
    components: {
        AppHeader
    },
    data() {
        return {
            store
        }
    }
    
}

</script>

<style lang="scss">

@use './styles/general.scss';


</style>
