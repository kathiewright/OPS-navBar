<template>
    <div>
        <!--prop "user" in table.vue to user in tableitems.vue-->
        <app-table-items v-for="user in users" :user="user"></app-table-items>
    </div>

</template>

<script>
    import TableItems from './TableItems.vue';

    export default {
        components: {
            appTableItems: TableItems
        },
        computed: {
            //pull in user array from store
            users() {
                return this.$store.getters.users;
            }
        }
    }
</script>