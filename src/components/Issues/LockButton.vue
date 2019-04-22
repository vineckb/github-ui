<template>
  <button type="button" @click="toggleLock" :class="{ mobile: $mq != 'desktop'}">
    <vue-material-icon :name="issue.locked ? 'vpn_key' : 'lock'" size="20" />

    <span class="buttonText" v-if="loading">...</span>

    <span class="buttonText" v-if="!loading">
      {{ issue.locked ? 'Unlock' : 'Lock' }}
    </span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },

  props: {
    repository: {
      type: String,
      required: true
    },

    issue: {
      type: Object,
      required: true
    }
  },

  methods: {
    toggleLock() {
      this.loading = true;
      const { repository } = this;
      const { number } = this.issue;

      if (!this.issue.locked) {
        this.$store.dispatch('issues/lock', { number, repository }).then(() => {
          this.loading = false
        });
      } else {
        this.$store.dispatch('issues/unlock', { number, repository }).then(() => {
          this.loading = false
        });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  width 100px
  min-width 100px
  height 36px
  cursor pointer
  background none
  border 1px solid #ccc
  border-radius 5px
  padding 5px 10px
  display flex
  align-items center
  color inherit
  outline none

  &.mobile
    width auto
    min-width 40px

    .buttonText
      display none

.loading
  justify-content center

.buttonText
  margin-left 10px
  text-align center
</style>
