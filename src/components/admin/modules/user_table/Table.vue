<template>
    <!--prop "user" in table.vue to user in tableitems.vue-->
    <!--
        <app-table-items v-for="user in users" :user="user"></app-table-items>
    -->
    <div>
        <ul v-for="user in users">
            <li>{{ users.firstName }}</li>
            <li>{{ users.lastName }}</li>            
        </ul>
        <p>The list is not working</p>
    </div>

</template>

<script>
    //import TableItems from './tableItems.vue';

    export default {
        //components: {
        //    appTableItems: TableItems
        //},
        methods: {
            //pull in user array from store
            users() {
                return this.$store.getters.users;
            }
        }
    }
</script>