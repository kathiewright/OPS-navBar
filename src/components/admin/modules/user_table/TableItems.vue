<template>
    <div>
            <div>
                <h2>{{ user.name }}</h2>
            </div>
            <div>
                <h2>{{ user.id }}</h2>
            </div>
    </div>
</template>

<script>
    export default {
        props: ['user'],
    }
</script>