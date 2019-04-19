<template>
  <div :class="$style.wrapper">
    <a :class="$style.button" :href="authorizeUrl">Login with github</a>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data () {
    return {
      authorizeUrl: api.authorizeUrl
    }
  },

  created () {
    const code = this.$route.query.code;
    if (code) {
      this.$store.dispatch('auth', code).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="stylus" module>
.wrapper
  display flex
  justify-content center
  align-items center
  height 100vh

.button
  padding 10px 30px
  border-radius 4px
  text-decoration none
  color inherit
  border 1px solid #ccc
</style>
