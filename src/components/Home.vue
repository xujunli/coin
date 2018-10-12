<template>
    <div id="home">
      <navbar></navbar>
      <router-view></router-view>
      <foot></foot>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    navbar: NavBar,
    foot: Footer
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
