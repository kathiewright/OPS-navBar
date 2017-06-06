<template>
    <div>
        <div>
            <h2>This is the Admin Dashboard</h2>
        </div>
        <app-table></app-table>
    </div>
</template>

<script>
    import Table from './modules/userTable/Table.vue';

    export default {
        components: {
            appTable: Table
        }
    }
</script>