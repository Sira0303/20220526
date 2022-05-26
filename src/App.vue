<template>
  <main-nav />

  <router-view />
  <Footer />

  
</template>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-brand > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

i {
  font-size: 25px;
  margin: 5px;
  color: black;
}

li {
  list-style: none;
}

.list-1 {
  font-size: 20px;
  font-weight: bolder;
}

.copyright {
  text-align: center;
  font-size: 0.7rem;
  color: grey;
}

a,
a:hover,
a:link {
  text-decoration: none;
  color: black;
}

.box {
  display: flex;
}

.box > a:hover {
  opacity: 0.5;
}
</style>

<script>
import mainNav from '@/components/main-nav.vue'
import Footer from '@/components/footer.vue'

import Home from '@/views/home.vue'


export default {
  components: {
    mainNav,
    Footer,
    Home
},
}
</script>

