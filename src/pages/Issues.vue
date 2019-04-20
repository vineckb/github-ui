<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Issues</h1>
    <IssuesList :issues="issues" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IssuesList from '@/components/Issues/List.vue';

export default {
  components: { IssuesList },

  computed: mapState({
    issues: state => state.issues.list
  }),

  mounted() {
    const repository = this.$route.params.repository;
    this.$store.dispatch('issues/fetchList', repository);
    this.issues;
  }
};
</script>

<style lang="stylus" module>
.title
  margin 30px 0
</style>
