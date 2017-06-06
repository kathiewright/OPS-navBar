<template>
    <div>
        <ul>
            <li>{{ user.firstName }} {{ user.lastName }} {{ user.role }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['user']
    }
</script>