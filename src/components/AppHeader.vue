<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="(element,index) in links " :key="index" class="nav-item">
                    <router-link :to="{ name: element.routeName }" class="nav-link">
                        {{ element.label }}
                    </router-link>
                    </li>
                </ul>
            
            </div>
        </div>
    </nav>

</template>

<script>

    export default {
        
        name: "AppHeader",
        data() {
            return {
                links: [
                    {
                        label: 'Home',
                        routeName: 'welcome'
                    },
                    {
                        label: 'Contatti',
                        routeName: 'contatti'
                    },
                    {
                        label: 'Progetti',
                        routeName: 'lista-progetti'
                    },
                ]
            }
        }
        
    }

</script>

<style lang="scss">




</style>