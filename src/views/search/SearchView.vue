<template>
    <h1>Search {{ query }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';


export default defineComponent({
    name: 'SearchPage',
    setup() {
        const route = useRoute();
        let query = route.query.q;


        return {
            query
        }
    }
})

</script>