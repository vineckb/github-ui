<template>
  <div :class="$style.app">
    <Header v-if="logged" />

    <div :class="$style.loader" v-if="loading">
      <CubeSpin size="100px" />
    </div>

    <router-view :class="{ [$style.wrapper]: true, [$style.hidden]: loading}" />
  </div>
</template>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle'
import Header from '@/components/Header';

export default {
  components: { Header, CubeSpin },

  computed: {
    logged() {
      return !!this.$store.state.token;
    },

    loading() {
      return this.$store.state.loading;
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

:global(body)
:global(html)
  background #f8f8fb
  height 100%

.app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  display flex
  flex-direction column

.loader
  display flex
  flex 1
  align-items center
  justify-content center
  font-size 100px

.wrapper
  display flex
  flex-direction column
  max-width 700px
  width 100%
  padding 20px
  margin 0 auto

.hidden
  display none
  visibility hidden
</style>
