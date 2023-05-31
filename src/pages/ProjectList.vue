<template>

    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link {{  }}" aria-label="Previous" @click="getProjects( current - 1)" :class="{'disabled' : current == 1}">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="page-item">
            <a class="page-link" aria-label="Next " @click="getProjects( current + 1)" :class="{'disabled' : current == last}">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>

    <div class="d-flex flex-wrap">
        <AppCards  :content="content" v-for="content in projects"/>
    </div>

</template>

<script>
    import AppCards from '../components/AppCards.vue';
    import { store } from '../store.js';
    import axios from 'axios';

    export default {
        components: {
            AppCards
        },
        data () {
            return {
                projects: [],
                current: 1,
                last: '',
                store
            }
        },
        methods: {

            getProjects(page) {

                axios.get(`${this.store.firstUrl}/api/projects`,{
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