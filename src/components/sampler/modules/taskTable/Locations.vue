<template>
    <div>
        <div>
            <div>
                <li>{{ address.sid }}</li>
            </div>
            <div>
                <li>{{ address.street }}</li> 
            </div>
            <div>
                <li>{{ address.city }}</li> 
            </div>
            <div>
                <li>{{ address.state }}</li> 
            </div>
            <div>
                <li>{{ address.zipcode }}</li> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['address']
    }
</script>