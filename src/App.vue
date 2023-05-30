<template>

    <div class="container mx-auto">
        <div class="row d-flex flex-wrap">

            <AppHeader/>

            <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link {{  }}" aria-label="Previous" @click="getProjects(current - 1)" :class="{'disabled' : current == 1}">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" aria-label="Next " @click="getProjects(current + 1)" :class="{'disabled' : current == last}">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
            </nav>

            <AppCards   :data="projects" 
                        :url="firstUrl"
            />

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
