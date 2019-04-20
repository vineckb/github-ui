<template>
  <Button bordered @click="toggleLock">
    <vue-material-icon :name="issue.locked ? 'vpn_key' : 'lock'" size="20" />

    <span class="buttonText" v-if="loading">...</span>

    <span class="buttonText" v-if="!loading">
      {{ issue.locked ? 'Unlock' : 'Lock' }}
    </span>
  </Button>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: { Button },

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

<style lang="stylus" scoped>
button
  width 100px
  height 36px

.loading
  justify-content center

.buttonText
  margin-left 10px
  text-align center
</style>
