<template>

    <div class="card col-4">
        <img v-if="singleProject.image" :src="`${this.store.firstUrl}/storage/${singleProject.image}`" class="card-img-top" alt="singleProject.name"/>
        
            <img v-else src="../../public/broken.jpg" class="card-img-top" />
    
        <div class="card-body">
            <h5 class="card-title">{{ singleProject.name }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ singleProject.start_date }}</li>
                <li class="list-group-item">{{ singleProject.framework }}</li>
                <li v-if="singleProject.technologies" class="list-group-item">{{singleProject.technologies.name}}</li>
            </ul>
            <p class="card-text">{{ cutString(singleProject.description) }}</p>
            
        </div>
    </div>
    

</template>

<script>

    import axios from 'axios';
    import { store } from '../store.js';


        export default {
        name: "CardShow",
        data() {
            return {
                store,
                singleProject: {}
            }
        },
        methods: {

            getSingleProject() {
                const slug = this.$route.params.slug;

                axios.get(`${this.store.firstUrl}/api/project/${slug}`)
                .then(response => {
                    this.singleProject = response.data.project;
                });
            },
            cutString (string) {

                if (string && string.length > 100) {
                    return string.substring(1,100)
                }
                },

        },
        mounted () {
            this.getSingleProject()
        }

    }

</script>

<style lang="scss">




</style>