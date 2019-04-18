<template>
  <button @click="toggleLock()">
    <span v-if="loading">...</span>
    <span v-if="!loading">{{ !issue.locked ? 'Lock' : 'Unlock' }}</span>
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

      if (!this.issue.locked) {
        await this.$store.dispatch('lockIssue', this.issue.number);
      } else {
        await this.$store.dispatch('unlockIssue', this.issue.number);
      }

      this.loading  = false;
    }
  }
}
</script>
