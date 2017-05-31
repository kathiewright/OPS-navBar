<template>
    <div class="navBar">
        <div class="navBar-home">
            <router-link to="/home">Operational Precision Systems</router-link>
        </div>
        <div v-if="admin">
            <router-link to="/admin/dash">Admin</router-link>
            <ul>
                <router-link to="/admin/system" tag="li">System Information</router-link>
                <router-link to="/admin/account" tag="li">Account</router-link>
                <router-link to="/admin/users" tag="li">Users</router-link>
            </ul>
        </div>
        <div v-if="sampler">
            <router-link to="/sampler/dash">Sampler</router-link>
            <ul>
                <router-link to="/sampler/current" tag="li">Open Tasks</router-link>
                <router-link to="/sampler/completed" tag="li">Closed Tasks</router-link>
                <router-link to="/sampler/calendar" tag="li">Calendar</router-link>
                <router-link to="/sampler/containers" tag="li">Containers Assiged</router-link>
                <router-link to="/sampler/map" tag="li">Map</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userType: "",
                admin: true,
                sampler: true
            }
        },
        methods: {
            checkUser() {
                if (userType = "admin") {
                    return this.admin = true;
                } else if (userType = "sampler") {
                    return this.sampler = true;
                } else {

                }
            }
        }
    }
</script>