<template>

    <div v-for="content in data" class="card col-2 m-1">
        <img src="content.image" class="card-img-top" alt="content.name">
        <div class="card-body">
            <h5 class="card-title">{{ content.name }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ content.start_date }}</li>
                <li class="list-group-item">{{ content.framework }}</li>
                <li v-if="content.technologies" class="list-group-item">{{content.technologies.name}}</li>
            </ul>
            <p class="card-text">{{ content.description }}</p>
        </div>
    </div>

</template>

<script>

    export default {

        props: {
            data: Array
        },
        
        name: "AppCards"
        
    }

</script>

<style lang="scss">




</style>