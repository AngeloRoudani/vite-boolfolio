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
import axios from 'axios';

export default {
    components: {
        AppHeader
    },
    data() {
        return {
            projects: [],
            firstUrl: 'http://localhost:8000',
            current: 1,
            last: ''
        }
    },
    methods: {
        getProjects(page) {

            axios.get(`${this.firstUrl}/api/projects`,{
                params: {
                    page: page
                }
            }
            )
            .then(response => {
            
                this.projects = response.data.results.data;
                this.current = response.data.results.current_page;
                this.last = response.data.results.last_page;

            });
        },
        getNext () {
            this.getProjects(current + 1)
        },
        getPrev () {
            this.getProjects(current - 1)
        }

    },
    mounted() {
        this.getProjects(1);
    }
    
}

</script>

<style lang="scss">

@use './styles/general.scss';


</style>
