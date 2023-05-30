<template>

    <div class="container mx-auto">
        <div class="row d-flex flex-wrap">

            <AppHeader/>

            <AppCards :data="projects"/>
            
        </div>

    </div>


</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';
import axios from 'axios';

export default {
    components: {
        AppHeader,
        AppCards
    },
    data() {
        return {
            projects: [],
            firstUrl: 'http://localhost:8000'
        }
    },
    methods: {
        getProjects() {

            axios.get(`${this.firstUrl}/api/projects`)
                .then(response => {
                
                    this.projects = response.data.results;
                });
        }

    },
    mounted() {
        this.getProjects();
    }
    
}

</script>

<style lang="scss">

@use './styles/general.scss';


</style>
