<template>
  <div id="app">
    <LoginButton />
    <router-view/>
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton';

export default {
  components: { LoginButton },

  created () {
    const token = localStorage.getItem('token');
    if (token) {
      this.$store.commit('setToken', token);
    }
  },

  watch: {
    '$route.query.code': function(code) {
      if (code) {
        this.$store.dispatch('auth', code).then(() => {
          this.$router.replace({ query: {} })
        })
      }
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
