<template>
  <div :class="$style.app">
    <Header v-if="logged" />

    <router-view :class="$style.wrapper" />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: { Header },

  computed: {
    logged: function () {
      return !!this.$store.state.token
    }
  },

  created () {
    this.loadAuth();
  },

  methods: {
    loadAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.$store.commit('setToken', token);
      }
    }
  }
}
</script>

<style lang="stylus" module>
:global(*)
  padding 0
  margin 0
  box-sizing border-box

globa(body)
  background #f8f8fb

.app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.wrapper
  display flex
  flex-direction column
  max-width 700px
  padding 20px
  margin 0 auto
</style>
