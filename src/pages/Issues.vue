<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Issues</h1>
    <IssuesList :repository="repository" />
  </div>
</template>

<script>
import IssuesList from '@/components/Issues/List.vue';

export default {
  components: { IssuesList },

  data() {
    return { repository: this.$route.params.repository }
  }
};
</script>

<style lang="stylus" module>
.title
  margin 30px 0
</style>
