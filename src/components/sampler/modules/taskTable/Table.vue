<template>
    <div>
        <!--prop "address" in table.vue to address in tableitems.vue-->
        <app-locations v-for="address in addresses" :address="address"></app-locations>
    </div>

</template>

<script>
    import Locations from './Locations.vue';

    export default {
        components: {
            appLocations: Locations
        },
        computed: {
            //pull in user array from store
            addresses() {
                return this.$store.getters.addresses;
            }
        }
    }
</script>