<template>
  <div>
    <app-nav-bar></app-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue';

export default {
  data () {
    return {

    }
  },
  components: {
    appNavBar: navBar,
  },
  created() {
    //initialize users array
    this.$store.dispatch('initUsers');
    //initialize addresses array
    this.$store.dispatch('initAddresses');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
