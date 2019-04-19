<template>
  <button :class="$style.button" @click="click">
    <vue-material-icon name="power_settings_new" />
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$store.dispatch('logout');
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
