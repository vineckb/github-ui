<template>
  <div :class="$style.wrapper">
    <Button :href="authorizeUrl" primary>
      Login with github
    </Button>
  </div>
</template>

<script>
import api from '@/services/api';
import Button from '@/components/Button';

export default {
  components: { Button },

  data () {
    console.log(api.auth.authorizeUrl)
    return {
      authorizeUrl: api.auth.authorizeUrl
    }
  },

  created () {
    const { code } = this.$route.query;
    const { commit, dispatch } = this.$store

    if (code) {
      commit('loading');
      dispatch('auth/auth', code).then(() => {
        commit('loaded');
        this.$router.push('/');
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
</style>
