<template>

    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link {{  }}" aria-label="Previous" @click="$emit(getNext)" :class="{'disabled' : current == 1}">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="page-item">
            <a class="page-link" aria-label="Next " @click="$emit(getPrev)" :class="{'disabled' : current == last}">
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

    export default {
        components: {
            AppCards
        }
        
    }

</script>