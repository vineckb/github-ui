<template>
  <button :class="$style.button" @click="toggleLock">
    <vue-material-icon :name="issue.locked ? 'vpn_key' : 'lock'" :class="$style.icon" size="20" />

    <span :class="[$style.buttonText]" v-if="loading">...</span>

    <span :class="$style.buttonText" v-if="!loading">
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
    issue: {
      type: Object,
      required: true
    }
  },

  methods: {
    async toggleLock() {
      this.loading = true;
      const { repository } = this.$route.params;
      const { number } = this.issue;

      if (!this.issue.locked) {
        await this.$store.dispatch('lockIssue', { number, repository });
      } else {
        await this.$store.dispatch('unlockIssue', { number, repository });
      }

      this.loading  = false;
    }
  }
}
</script>

<style lang="stylus" module>
.button
  background none
  border 1px solid #ccc
  border-radius 5px
  cursor pointer
  padding 5px 10px
  width 100px
  display flex
  align-items center
  height 36px

.loading
  justify-content center

.buttonText
  margin-left 10px
  text-align center
</style>
