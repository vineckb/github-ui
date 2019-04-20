<template>
  <Button @click="click">
    <vue-material-icon name="power_settings_new" />
  </Button>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: { Button },

  methods: {
    click() {
      this.$store.dispatch('auth/logout');
      this.$router.go();
    }
  }
}
</script>

<style lang="stylus" module>
.button
  background none
  border none
  cursor pointer
</style>
