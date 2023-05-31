<template>

    <div class="card col-2 m-1">
        <img v-if="content.image" :src="`${this.store.firstUrl}/storage/${content.image}`" class="card-img-top" alt="content.name"/>
        
            <img v-else src="../../public/broken.jpg" class="card-img-top" />
    
        <div class="card-body">
            <h5 class="card-title">{{ content.name }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ content.start_date }}</li>
                <li class="list-group-item">{{ content.framework }}</li>
                <li v-if="content.technologies" class="list-group-item">{{content.technologies.name}}</li>
            </ul>
            <p class="card-text">{{ cutString(content.description) }}</p>
            <router-link :to="{name: 'project', params: {slug: content.slug}}" class="btn btn-success">
                Vedi Progetto
            </router-link>
        </div>
    </div>

</template>

<script>

    import { store } from '../store.js';

    export default {

        props: ['content', 'url'],
        data() {
            return {
                photo: 'broken.jpg',
                store
            }
        },
        
        name: "AppCards",
        methods: {
            cutString (string) {

                if (string && string.length > 100) {
                    return string.substring(1,100)
                }
            },
            getImageUrl(name) {

                return new URL(`../assets/${name}`, import.meta.url).href;

            }
        }
        
    }

</script>

<style lang="scss">




</style>