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
    return {
      authorizeUrl: api.auth.authorizeUrl
    }
  },

  created () {
    const { code } = this.$route.query;
    if (code) {
      this.$store.dispatch('auth/auth', code).then(() => {
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
</style>
