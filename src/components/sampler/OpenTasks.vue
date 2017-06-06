<template>
    <div>
        <h2>This is the Sampler Current Tasks page</h2>
        <app-task-table></app-task-table>
    </div>
</template>

<script>
    import Table from './modules/taskTable/Table.vue';

    export default {
        components: {
            appTaskTable: Table
        }
    }
</script>